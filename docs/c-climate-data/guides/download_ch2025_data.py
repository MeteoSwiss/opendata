import json

from pystac import Asset
from pystac_client import Client, CollectionClient

import re
import urllib.request

def main(): 
    catalog = Client.open('https://data.geo.admin.ch.ch/api/stac/v1/')
    print(catalog.title)

    # DAILY-LOCAL collection
    collection_id = "ch.meteoschweiz.ogd-climate-scenarios-ch2025"
    # DAILY-GRIDDED collection
    # collection_id = "ch.meteoschweiz.ogd-climate-scenarios-ch2025-grid"

    # get the collection client
    collection: CollectionClient = catalog.get_collection(collection_id)
    print(collection.title)

    # print all items
    for item in collection.get_items():
        print(f"{item.id}: {len(item.assets)}")

    # create a dict with all items of the collection
    assets_dict = {}
    for item in collection.get_items():
        assets_dict = assets_dict | item.assets
    print(f"Number of assets in total: {len(assets_dict)}")

    # find matching keys
    hits = [k for k in assets_dict.keys() if k == "ogd-climate-scenarios-ch2025_zwk_pr_ref91-20.csv" ]

    # use regular expression to find matching keys
    pattern = "_zwk_" # find all assets for station zwk, the same can be done for parameters, GWLs etc. 
    pattern = re.compile("^.*" + pattern + ".*$")
    hits = [k for k in assets_dict.keys() if pattern.match(k) ]
    print(f"{len(hits)} Hits for pattern {pattern}: {hits}")

    # download all hits to current directory
    for hit in hits:
        print(assets_dict[hit].href)
        #urllib.request.urlretrieve(url=assets_dict[hit].href, filename=hit)