const mapLhciResults = require('./mapLhciResults.js')
const fromResultsToCommentMapper = require('./fromResultsToCommentMapper.js')

module.exports = ({results = []}) => {
  const formattedResults = mapLhciResults(results)
  const comment = fromResultsToCommentMapper(formattedResults)

  return comment
}
