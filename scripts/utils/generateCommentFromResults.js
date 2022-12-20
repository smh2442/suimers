const mapLhciResults = require('./mapLhciResults.js')
const fromResultsToCommentMapper = require('./fromResultsToCommentMapper.js')

module.exports = ({results = []}) => {
  console.log({type: typeof results, value: results}) // eslint-disable-line
  const formattedResults = mapLhciResults(results)
  const comment = fromResultsToCommentMapper(formattedResults)

  return comment
}
