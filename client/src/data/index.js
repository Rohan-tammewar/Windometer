import axios from 'axios'

export const directionsOptions = [
  { label: 'East', value: 'east' },
  { label: 'West', value: 'west' },
  { label: 'South', value: 'south' },
  { label: 'North', value: 'north' },
  { label: 'South-east', value: 'southeast' },
  { label: 'North-east', value: 'northeast' },
  { label: 'North-west', value: 'northwest' },
  { label: 'south-west', value: 'southwest' },
]

export const getDistrictList = async () => {
  const data = await axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}districtdata/getAllDistrictList`)
    .then((res) => {
      // console.log(res.data)
      return res.data
    })

  // console.log(data)
  return data
}

export const createDistrictOptions = (districtlist) => {
  const districtOptions = []

  districtlist.forEach((district) => {
    districtOptions.push({
      label: district.name,
      value: district.name,
    })
  })
  return districtOptions
}
