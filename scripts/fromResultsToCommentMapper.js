// '⚡️ [Lighthouse report]'
// `(${Object.values(links)[0]}) for the changes in this PR:`,

const getScore = res => {
  if (res >= 90) return '🟢'
  return res >= 50 ? '🟠' : '🔴'
}

const getResultPart = ({summary, url}) => {
  return [
    '| Category | Score |',
    '| --- | --- |',
    `| ${getScore(summary.performance)} Performance | ${summary.performance} |`,
    `| ${getScore(summary.accessibility)} Accessibility | ${
      summary.accessibility
    } |`,
    `| ${getScore(summary['best-practices'])} Best practices | ${
      summary['best-practices']
    } |`,
    `| ${getScore(summary.seo)} SEO | ${summary.seo} |`,
    `| ${getScore(summary.pwa)} PWA | ${summary.pwa} |`,
    ' ',
    `*Lighthouse ran on ${url}*`,
    ' '
  ].join('\n')
}

const fromResultsToCommentMapper = (results = []) => {
  const comments = [
    '⚡️ [Lighthouse report]',
    ' ',
    ...results.map(getResultPart)
  ]

  const comment = comments.join('\n')

  return comment
}

module.exports = fromResultsToCommentMapper
