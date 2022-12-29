/* eslint-env mocha */
import {expect} from 'chai'

const mapLhciResults = require('../scripts/mapLhciResults.js')

const input = [
  {
    url: 'http://localhost:8000/',
    isRepresentativeRun: true,
    htmlPath:
      '/home/runner/work/lighthouse-action/lighthouse-action/.lighthouseci/localhost-_-2022_09_13_13_46_39.report.html',
    jsonPath:
      '/home/runner/work/lighthouse-action/lighthouse-action/.lighthouseci/localhost-_-2022_09_13_13_46_39.report.json',
    summary: {
      performance: 1,
      accessibility: 0.86,
      'best-practices': 0.93,
      seo: 0.58,
      pwa: 0.36
    }
  },
  {
    url: 'http://localhost:8000/listing',
    isRepresentativeRun: true,
    htmlPath:
      '/home/runner/work/lighthouse-action/lighthouse-action/.lighthouseci/localhost-_listing-2022_09_13_13_46_43.report.html',
    jsonPath:
      '/home/runner/work/lighthouse-action/lighthouse-action/.lighthouseci/localhost-_listing-2022_09_13_13_46_43.report.json',
    summary: {
      performance: 1,
      accessibility: 0.86,
      'best-practices': 0.93,
      seo: 0.58,
      pwa: 0.36
    }
  }
]

const expectedResults = [
  {
    summary: {
      performance: 100,
      accessibility: 86,
      'best-practices': 93,
      seo: 58,
      pwa: 36
    },
    url: 'http://localhost:8000/'
  },
  {
    summary: {
      performance: 100,
      accessibility: 86,
      'best-practices': 93,
      seo: 58,
      pwa: 36
    },
    url: 'http://localhost:8000/listing'
  }
]

describe('mapLhciResults', () => {
  it('should map lhci results', async () => {
    const results = mapLhciResults(input)
    expect(results).to.eql(expectedResults)
  })
})
