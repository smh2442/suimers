/* eslint-env mocha */
import {expect} from 'chai'

const mapLhciResults = require('../src/mapLhciResults.js')

const result = {
  performance: 1,
  accessibility: 0.86,
  'best-practices': 0.93,
  seo: 0.58,
  pwa: 0.36
}

describe('mapLhciResults', () => {
  it('should map results to percentage numbers', async () => {
    const results = mapLhciResults(result)

    expect(results).to.be.an('object')
    expect(results).to.eql({
      performance: 100,
      accessibility: 86,
      'best-practices': 93,
      seo: 58,
      pwa: 36
    })
  })
})
