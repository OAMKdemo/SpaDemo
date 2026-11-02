import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home({currency}) {
  const [amount, setAmount] = useState('')
  const [result, setResult] = useState(0)
  const [rate, setRate] = useState(0)

  useEffect(() => {
    const url = import.meta.env.VITE_API_URL + currency
    console.log(url)
    axios.get(url)
      .then((response) => setRate(response.data.rate))
      .catch((error) => console.log(error))
  }, [])


  const convert = (event) => {
    event.preventDefault()
    setResult(amount * rate)
  }

  return (
    <form onSubmit={convert}>
      <h3>Convert currency to euros</h3>
      <p>Source currency is {currency} and rate is {rate}</p>
      <label>Amount in EUR</label>
      <div>
        <input value={amount} onChange={(event) => setAmount(event.target.value)} type="number" />
        <button>Convert</button>
      </div>
      <output>{result.toFixed(2)}</output>
    </form>
  )
}
