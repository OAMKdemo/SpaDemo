import axios from "axios"
import { afterEach, describe, test, expect, vi } from "vitest"
import request from 'supertest'
import app from './app.js'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Rate api tests', () => {
  test('GET /rate/:currency return real exchange rate', async () => {
    const response = await request(app).get('/rate/SEK')
    expect(response.status).toBe(200)
    expect(typeof response.body.rate).toBe('number')
  })

  test('GET /rate/:currency return fake exchange rate', async () => {
    vi.spyOn(axios, 'get').mockResolvedValue({
      data: { data: { EUR: 0.91 } }
    })

    const response = await request(app).get('/rate/SEK')
    expect(response.status).toBe(200)
    expect(response.body.rate).toBe(0.91)
  })

  test('GET /rate/:currency returns 400 for an invalid currency', async () => {
    const response = await request(app).get('/rate/INVALID')

    expect(response.status).toBe(400)
  })

  test('GET /rate/:currency returns 502 when FreeCurrencyAPI fails', async () => {
    vi.spyOn(axios, 'get').mockRejectedValue(new Error('API unavailable'))

    const response = await request(app).get('/rate/SEK')

    expect(response.status).toBe(502)
    expect(response.body).toEqual({ error: 'Could not fetch rate' })
  })
})