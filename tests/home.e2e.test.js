import { test, expect } from '@playwright/test'

test.describe('Successful conversion',() => {
  test('Should convert SEK to EUR using the real API',async ({ page }) => {
    const apiAnswer = page.waitForResponse('**/rate/USD')
    await page.goto('/')
    const { rate } = await (await apiAnswer).json()

    await page.locator('input').fill('100')
    await page.getByRole('button', { name: 'Convert' }).click()

    await expect(page.locator('output')).toHaveText((100 * rate).toFixed(2))
  })

  test('Should convert SEK to EUR with a mocked rate',async ({ page }) => {
    await page.route('**/rate/USD', route =>
      route.fulfill({ json: { rate: 0.9 } }),
    )
    await page.goto('/')

    await page.locator('input').fill('100')
    await page.getByRole('button', { name: 'Convert' }).click()

    await expect(page.locator('output')).toHaveText('90.00')
  })

  test('Should not convert when rate cannot be fetched',async ({ page }) => {
    await page.route('**/rate/USD', route => route.fulfill({ status: 502, json: { error: 'Could not fetch rate' } }))
    await page.goto('/')

    await page.locator('input').fill('100')

    //await expect(page.getByRole('button', { name: 'Convert' })).toBeDisabled()
    await expect(page.locator('output')).toHaveText('0.00')
  })
})