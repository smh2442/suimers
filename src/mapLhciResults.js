const formatResult = res => Math.round(res * 100)

const formatLightHouseResults = result => {
  const formattedResults = {}

  Object.keys(result).forEach(
    key => (formattedResults[key] = formatResult(result[key]))
  )

  return formattedResults
}

module.exports = result => {
  return formatLightHouseResults(result)
}
