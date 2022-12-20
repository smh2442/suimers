#!/usr/bin/env node

const core = require('@actions/core')
const generateCommentFromResults = require('./utils/generateCommentFromResults.js')

const args = process.argv.slice(2)
const [results] = args

try {
  const comment = generateCommentFromResults({results: JSON.parse(results)})

  core.setOutput('comment', comment)
} catch (err) {
  console.error(err) // eslint-disable-line
  process.exit(1)
}
