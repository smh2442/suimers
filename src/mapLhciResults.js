const formatScore = res => Math.round(res * 100)

const formatLightHouseSummary = result => {
  const formattedSummary = {}

  Object.keys(result).forEach(
    key => (formattedSummary[key] = formatScore(result[key]))
  )

  return formattedSummary
}

module.exports = (results = []) => {
  const formattedResults = results.map(({url, summary}) => {
    const formattedSummary = formatLightHouseSummary(summary)
    return {summary: formattedSummary, url}
  })

  return formattedResults
}
