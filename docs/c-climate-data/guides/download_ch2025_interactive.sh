#!/bin/bash

# Usage: run: bash download_interactive_full.sh or ./download_interactive_full.sh
# The script will ask if you want DAILY-LOCAL or DAILY-GRIDDED and proceed accordingly.

size_calc="TRUE"
sha256="TRUE"

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
    read -p "Enter station code (e.g. ABO, ZER or all): " STATION
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

read -p "Enter GWL (ref91-20, GWL1.5, GWL2.0, GWL2.5, GWL3.0 or all): " GWL

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
    OUTPUT_DIR_DEFAULT="${COLLECTIONID}/${STATION,,}"
else
    OUTPUT_DIR_DEFAULT="${COLLECTIONID}/${PARAMETER,,}"
fi

echo "Querying STAC API for collection: $COLLECTION"

# Build jq filter dynamically
urls=""
NEXT_URL="https://data.geo.admin.ch/api/stac/v0.9/collections/${COLLECTION}/items"

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
    echo "❌ No matching files found. Check the User Documentation for details on available stations & parameters."
    exit 1
else
    file_count=$(echo "$urls" | wc -l)
    echo "✅ Found $file_count matching files:"
    echo "$urls"
fi

# Calculate total size
if [ "$size_calc" = "TRUE" ]; then
	echo "Please wait: Calculating total size..."
	total_size=0
	for url in $urls; do
	    size=$(curl -sI "$url" | grep -i Content-Length | awk '{print $2}' | tr -d '\r')
	    if [ -n "$size" ]; then
	        total_size=$((total_size + size))
	    fi
	done
	# Convert to MB
	size_mb=$(echo "scale=2; $total_size/1024/1024" | bc)
	unit="MB"
	    if [ "$MODE" == "gridded" ]; then
    	        unit="MB (≈ $(echo "$size_mb / 1024" | bc) GB)"
            fi
	echo -e "⚠️  Careful: $file_count files will be downloaded. \e[36mEstimated total size: ${size_mb} ${unit}.\e[0m"
fi

# Confirm download

read -p "Continue? (y/n): " confirm
if [ "$confirm" != "y" ]; then
    echo "❌ Download canceled."
    exit 0
fi

# Defining output dir
read -e -p "$(echo -e "Enter path to save data (default: \e[36m$OUTPUT_DIR_DEFAULT\e[0m): ")" CUSTOM_PATH

# Final output directory
if [ -n "$CUSTOM_PATH" ]; then
    OUTPUT_DIR="${CUSTOM_PATH%/}/$OUTPUT_DIR_DEFAULT"
else
    OUTPUT_DIR="$OUTPUT_DIR_DEFAULT"
fi

# Download
echo "Downloading files..."

mkdir -p "$OUTPUT_DIR"

echo "$urls" | while read -r url; do
    echo "Downloading: $url"
    wget -q -P "$OUTPUT_DIR" "$url"
done

# Assume OUTPUT_DIR and urls are set
DOWNLOAD_FAILED=true

for file in $urls; do
    TARGET_FILE="${OUTPUT_DIR}/$(basename "$file")"
    if [ -f "$TARGET_FILE" ]; then
	# if there is a file then:
        #DOWNLOAD_FAILED=false

	if [ "$sha256" = "TRUE" ]; then 

		# Compute local SHA256
        	local_sha=$(sha256sum "$TARGET_FILE" | awk '{print $1}')

        	# Get remote SHA256 from header
        	remote_sha=$(curl -s -I "$file" | awk -F': ' '/x-amz-meta-sha256/ {print $2}' | tr -d '\r')

        	# Compare
        	if [ "$local_sha" == "$remote_sha" ]; then
            		#echo "✅ SHA256 match for $TARGET_FILE"
            		DOWNLOAD_FAILED=false
        	else
            		echo "❌ SHA256 mismatch found. Files not save to use."
			exit 1
        	fi

        else
		DOWNLOAD_FAILED=false
	fi
    fi
done

#read -e -p "$(echo -e "Enter path to save data (default: \e[36m$OUTPUT_DIR_DEFAULT\e[0m): ")" CUSTOM_PATH

if $DOWNLOAD_FAILED; then
    echo -e "❌ Download failed: No files found in \e[36m$OUTPUT_DIR\e[0m)"
    exit 1
else
    echo -e "\e[32m✅ Download successful: Files saved in $OUTPUT_DIR\e[0m"
fi


