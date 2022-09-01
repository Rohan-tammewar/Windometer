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

//Fetching district names from db to display it in dropdown list
export const getDistrictList = async () => {
  const data = await axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}districtdata/getAllDistrictList`)
    .then((res) => {
      return res.data
    })

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

export const saveDistrictWindData = async (responseData) => {
  try {
    const payload = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}winddata/save`,
      responseData,
      { 'Content-Type': 'application/json' },
    )

    if (payload.status === 200) {
      let responseMessage = payload.data.message
      return {
        responseMessage,
      }
    } else {
      console.log('error ', payload.data.message)
    }
    console.error('Request failed with status code: ' + payload.statusCode)
  } catch (error) {
    console.error('Unable to update wind data.' + error.message)
  }
}

export const saveDistrictData = async (responseData) => {
  try {
    const payload = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}districtdata/save`,
      responseData,
      { 'Content-Type': 'application/json' },
    )

    if (payload.status === 200) {
      let responseMessage = payload.data.message
      return {
        responseMessage,
      }
    } else {
      console.log('error ', payload.data.message)
    }
    console.error('Request failed with status code: ' + payload.statusCode)
  } catch (error) {
    console.error('Unable to update wind data.' + error.message)
  }
}

export const getAverageWindSpeed = async (responseData) => {
  try {
    const payload = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}winddata/AverageWindSpeed`,
      responseData,
      { 'Content-Type': 'application/json' },
    )

    if (payload.status === 200) {
      let responseMessage = payload.data
      return {
        responseMessage,
      }
    } else {
      console.log('error ', payload.data.message)
    }
    console.error('Request failed with status code: ' + payload.statusCode)
  } catch (error) {
    console.error('Unable to update wind data.' + error.message)
  }
}

export const getMaximumWindSpeed = async () => {
  const data = await axios
    .get(`${process.env.REACT_APP_API_ENDPOINT}winddata/getMaxWindSpeed`)
    .then((res) => {
      return res.data
    })

  return data
}

export const getMaximumWindDirection = async () => {
  const data = await axios
    .get(
      `${process.env.REACT_APP_API_ENDPOINT}winddata/getWindDirectionOccurance`,
    )
    .then((res) => {
      return res.data
    })

  return data
}

export const getWindDirectionProbability = async (responseData) => {
  try {
    const payload = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}winddata/getProbability`,
      responseData,
      { 'Content-Type': 'application/json' },
    )

    if (payload.status === 200) {
      let responseMessage = payload.data
      return {
        responseMessage,
      }
    }
  } catch (error) {
    console.error('Unable to update wind data.' + error.message)
  }
}
