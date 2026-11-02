import { fetchRate } from '../services/RateService.js'

export const getRate = async (req, res) => {
  const currency = req.params.currency.toUpperCase()

  if (!/^[A-Z]{3}$/.test(currency)) {
    return res.status(400).json({ error: 'Currency must be a 3-letter code, e.g. SEK' })
  }

  try {
    const rate = await fetchRate(currency)
    res.json({ rate })
  } catch (error) {
    console.log(error)
    res.status(502).json({ error: 'Could not fetch rate' })
  }
}
