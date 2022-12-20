#!/usr/bin/env node

const core = require('@actions/core')
const mapLhciResults = require('./utils/mapLhciResults.js')
const fromResultsToCommentMapper = require('./utils/fromResultsToCommentMapper.js')

function generateCommentFromResults({results = []}) {
  console.log({type: typeof results, value: results}) // eslint-disable-line
  const formattedResults = mapLhciResults(results)
  const comment = fromResultsToCommentMapper(formattedResults)

  return comment
}

const args = process.argv.slice(2)
const [results] = args

const comment = generateCommentFromResults({results})

core.setOutput('comment', comment)
