// '⚡️ [Lighthouse report]'
const getScore = res => {
  if (res >= 90) return '🟢'
  return res >= 50 ? '🟠' : '🔴'
}

const getResultPart = result => {
  return [
    // `(${Object.values(links)[0]}) for the changes in this PR:`,
    '| Category | Score |',
    '| --- | --- |',
    `| ${getScore(result.performance)} Performance | ${result.performance} |`,
    `| ${getScore(result.accessibility)} Accessibility | ${
      result.accessibility
    } |`,
    `| ${getScore(result['best-practices'])} Best practices | ${
      result['best-practices']
    } |`,
    `| ${getScore(result.seo)} SEO | ${result.seo} |`,
    `| ${getScore(result.pwa)} PWA | ${result.pwa} |`,
    ' '
    // `*Lighthouse ran on [${Object.keys(links)[0]}](${Object.keys(links)[0]})*`
  ].join('\n')
}

const getComment = ({results = []}) => {
  const comment = results.map(getResultPart).join('\n')

  return comment
}

module.exports = getComment
