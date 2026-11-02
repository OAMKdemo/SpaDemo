import axios from 'axios'

export const fetchRate = async (currency) => {
  const response = await axios.get(process.env.API_URL, {
    params: {
      base_currency: currency,
      currencies: 'EUR',
      apikey: process.env.API_KEY,
    },
  })
  return response.data.data.EUR
}
