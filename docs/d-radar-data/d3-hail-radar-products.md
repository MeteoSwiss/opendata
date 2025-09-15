---
sidebar_position: 3
---

# Hail radar products

:::warning

*(not yet realised)*

:::

:::info 

Please be aware that both hail products POH & MESHS are beeing only calculated between 1st of April and 30th of September each year. 
Even if there may be files being published outside this timeframe, the files are empty. 

**Daily radar products come in three variants (valid for both, BZC and MZC):** 

Alle timestamps are the respective 5min values, except

BZCYYDDD**2400**vl.845.h5 is the 24h sum (between 0h - 24h UTC) 
and
MZCYYDDD**3000**vl.850.h5** is the 24h sum (between 6h - 6h UTC)


:::

## Data format {#data-format}
The data format is [`HDF5`](https://www.hdfgroup.org/solutions/hdf5/) with an estimated volume of ... MB per file.

:::info

Please note, that for the processing of HDF5 files, specialised software packages may be needed. 
:::

Naming convention of the files:

BZCYYDDDhhmm … <XYZ>.h5

where

YY = two last digit of the year

DDD = Gregorian day of product creation (1-366)

hhmm = time of product creation (UTC)

XYZ = x01 (reserved)

The coordinate system is [`Swiss LV95`](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system) / [`EPSG:2056`](https://epsg.io/2056). 



