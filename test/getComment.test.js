/* eslint-env mocha */
import {expect} from 'chai'

const getComment = require('../src/getComment.js')

const results = [
  {
    performance: 100,
    accessibility: 86,
    'best-practices': 93,
    seo: 58,
    pwa: 36
  }
]

describe('getComment', () => {
  it('should map results to a github comment string', async () => {
    const comment = getComment({results})

    expect(comment).to.eql(
      [
        '| Category | Score |',
        '| --- | --- |',
        '| 🟢 Performance | 100 |',
        '| 🟠 Accessibility | 86 |',
        '| 🟢 Best practices | 93 |',
        '| 🟠 SEO | 58 |',
        '| 🔴 PWA | 36 |',
        ' '
      ].join('\n')
    )
  })
})
