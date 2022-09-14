/* eslint-env mocha */
import {expect} from 'chai'

const generateCommentFromResults = require('../src/generateCommentFromResults.js')

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

describe('generateCommentFromResults', () => {
  it('should generate a comment from lhci results', async () => {
    const comment = generateCommentFromResults({results: input})

    expect(comment).to.eql(
      [
        '⚡️ [Lighthouse report]',
        ' ',
        '| Category | Score |',
        '| --- | --- |',
        '| 🟢 Performance | 100 |',
        '| 🟠 Accessibility | 86 |',
        '| 🟢 Best practices | 93 |',
        '| 🟠 SEO | 58 |',
        '| 🔴 PWA | 36 |',
        ' ',
        '*Lighthouse ran on http://localhost:8000/*',
        ' ',
        '| Category | Score |',
        '| --- | --- |',
        '| 🟢 Performance | 100 |',
        '| 🟠 Accessibility | 86 |',
        '| 🟢 Best practices | 93 |',
        '| 🟠 SEO | 58 |',
        '| 🔴 PWA | 36 |',
        ' ',
        '*Lighthouse ran on http://localhost:8000/listing*',
        ' '
      ].join('\n')
    )
  })
})
