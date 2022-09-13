/* eslint-env mocha */
import {expect} from 'chai'

const fromResultsToCommentMapper = require('../src/fromResultsToCommentMapper.js')

const input = [
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

describe('fromResultsToCommentMapper', () => {
  it('should map results to a github comment string', async () => {
    const comment = fromResultsToCommentMapper(input)

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
