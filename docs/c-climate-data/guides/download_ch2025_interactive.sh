#!/bin/bash

# Usage: run: bash download_interactive_full.sh or ./download_interactive_full.sh
# The script will ask if you want DAILY-LOCAL or DAILY-GRIDDED and proceed accordingly.

size_calc="FALSE"
# Define environment
ENVIRONMENT="PROD"   # or "DEPL"

#echo -e "\e[32mPlease write everything in lowercase!\e[0m"
read -p "Do you want to download DAILY-LOCAL or DAILY-GRIDDED? (local/gridded): " MODE

MODE="${MODE,,}"

if [ "$MODE" == "local" ]; then
    COLLECTIONID="ogd-climate-scenarios-ch2025"
    FORMAT_DEFAULT=".csv"
    NEED_STATION="TRUE"
elif [ "$MODE" == "gridded" ]; then
    COLLECTIONID="ogd-climate-scenarios-ch2025-grid"
    FORMAT_DEFAULT=".nc"
    NEED_STATION="FALSE"
    echo -e "\e[36m⚠️  Careful: DAILY-GRIDDED files are very large (~2 GB each)!\e[0m"
else
    echo "❌ Invalid choice. Please enter 'local' or 'gridded'."
    exit 1
fi

MCH="ch.meteoschweiz."
COLLECTION="${MCH}${COLLECTIONID}"

# Collect inputs
if [ "$NEED_STATION" == "TRUE" ]; then
    read -p "Enter station code (e.g. abo or all): " STATION
else
    STATION="none"
fi

if [ "$MODE" == "local" ]; then
    # LOCAL mode: full parameter list
    if [ -z "$PARAMETER" ]; then
        read -p "Enter parameter (pr, tas, tasmin, tasmax, rsds, hurs, sfcwind or all): " PARAMETER
    fi
else
    # GRIDDED mode: restricted parameter list
    if [ -z "$PARAMETER" ]; then
        read -p "Enter parameter (pr, tas, tasmin, tasmax or all): " PARAMETER
    fi
fi

read -p "Enter GWL (ref91-20, gwl1.5, gwl2.0, gwl2.5, gwl3.0 or all): " GWL

if [ "$MODE" == "local" ]; then
    read -p "Enter format (.csv or .zip): " FORMAT
else
    FORMAT="$FORMAT_DEFAULT"
fi

# Validate inputs
if [ -z "$PARAMETER" ] || [ -z "$GWL" ] || [ -z "$FORMAT" ]; then
    echo "❌ Error: All inputs must be provided."
    exit 1
fi

# Output directory
if [ "$MODE" == "local" ]; then
    OUTPUT_DIR="${COLLECTIONID}/${STATION,,}"
else
    OUTPUT_DIR="${COLLECTIONID}/${PARAMETER,,}"
fi

echo "Querying STAC API for collection: $COLLECTION"

# Build jq filter dynamically
urls=""
# Set NEXT_URL based on environment
if [ "$ENVIRONMENT" = "DEPL" ]; then
    NEXT_URL="https://sys-data.int.bgdi.ch/api/stac/v0.9/collections/${COLLECTION}/items"
else
    NEXT_URL="https://data.geo.admin.ch/api/stac/v0.9/collections/${COLLECTION}/items"
fi

while [ -n "$NEXT_URL" ]; do
    #echo "Fetching: $NEXT_URL"
    RESPONSE=$(curl -s "$NEXT_URL")

    if [ "$MODE" == "local" ]; then
        PAGE_URLS=$(echo "$RESPONSE" | jq -r \
            --arg collectionid "$COLLECTIONID" \
            --arg station "${STATION,,}" \
            --arg parameter "${PARAMETER,,}" \
            --arg gwl "${GWL,,}" \
            --arg format "${FORMAT,,}" '
            .. | .href? | select(. != null) |
            select(
                (. | split("/")[-1]) as $fname |
                (
                    ($fname | startswith($collectionid + "_")) and
                    (if $station == "all" then true else contains("_" + $station + "_") end) and
                    (if $parameter == "all" then true else contains("_" + $parameter + "_") end) and
                    (if $gwl == "all" then true else contains("_" + $gwl) end) and
                    endswith($format)
                )
            )
        ')
    else
        PAGE_URLS=$(echo "$RESPONSE" | jq -r \
            --arg collectionid "$COLLECTIONID" \
            --arg parameter "$PARAMETER" \
            --arg gwl "$GWL" \
            --arg format "$FORMAT" '
            .. | .href? | select(. != null) |
            select(
                (. | split("/")[-1]) as $fname |
                (
                    ($fname | startswith($collectionid + "_")) and
                    (if $parameter == "all" then true else contains("_" + $parameter + "_") end) and
                    (if $gwl == "all" then true else contains("_" + $gwl) end) and
                    endswith($format)
                )
            )
        ')
    fi

    if [ -n "$PAGE_URLS" ]; then
        if [ -z "$urls" ]; then
            urls="$PAGE_URLS"
    	else
            urls="$urls"$'\n'"$PAGE_URLS"
        fi
    fi

    # Get next page link
    NEXT_URL=$(echo "$RESPONSE" | jq -r '.links[] | select(.rel=="next") | .href')
done


# Check results
if [ -z "$urls" ]; then
    echo "❌ No matching files found."
    exit 1
else
    file_count=$(echo "$urls" | wc -l)
    echo "✅ Found $file_count matching files:"
    echo "$urls"
fi

# Estimate total size based on average file sizes
if [ "$MODE" == "local" ]; then
    if [ "$FORMAT" == ".csv" ]; then
        avg_size_mb=1.2
    else
        avg_size_mb=2.1
    fi
else
    avg_size_mb=1500  # ~2 GB per file
fi

estimated_size=$(echo "$file_count * $avg_size_mb" | bc)
unit="MB"
if [ "$MODE" == "gridded" ]; then
    unit="MB (≈ $(echo "$estimated_size / 1024" | bc) GB)"
fi

# Calculate total size
if [ "$size_calc" = "TRUE" ]; then
	echo "Calculating total size..."
	total_size=0
	for url in $urls; do
	    size=$(curl -sI "$url" | grep -i Content-Length | awk '{print $2}' | tr -d '\r')
	    if [ -n "$size" ]; then
	        total_size=$((total_size + size))
	    fi
	done
	# Convert to MB
	size_mb=$(echo "scale=2; $total_size/1024/1024" | bc)
	echo "Estimated total size: ${size_mb} MB"
fi

#echo -e "\e[36mEstimated total size: ${estimated_size} ${unit}\e[0m"

# Confirm download

echo -e "⚠️  Careful: $file_count files will be downloaded. \e[36mEstimated total size: ${estimated_size} ${unit}.\e[0m"
read -p "Continue? (y/n): " confirm
if [ "$confirm" != "y" ]; then
    echo "❌ Download canceled."
    exit 0
fi


# Download
echo "Downloading files..."

mkdir -p "$OUTPUT_DIR"

echo "$urls" | while read -r url; do
    echo "Downloading: $url"
    wget -q -P "$OUTPUT_DIR" "$url"
done

echo -e "\e[32m✅ Download complete. Files saved in folder: $OUTPUT_DIR\e[0m"

