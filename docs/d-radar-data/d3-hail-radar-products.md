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

:::

## Data format {#data-format}
The data format is [`HDF5`](https://www.hdfgroup.org/solutions/hdf5/) with an estimated volume of ... MB per file.

:::info
Please note, that for tha processing of HDF5 files, specialised software packages may be needed. 
:::

Naming convention of the files:

BZC<yy><GregorianDay><hhmm>…<XYZ>.h5

yy> = two last digit of the year
<GregorianDay> = Gregorian day of product creation
<hhmm> = time of product creation (UTC)
<XYZ> = x01 (reserved)


The coordinate system is [`Swiss LV95`](https://www.swisstopo.admin.ch/en/the-swiss-coordinates-system) / [`EPSG:2056`](https://epsg.io/2056). 


