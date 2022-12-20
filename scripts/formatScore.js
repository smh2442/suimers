#!/usr/bin/env node

const core = require('@actions/core')
const generateCommentFromResults = require('./utils/generateCommentFromResults.js')

const args = process.argv.slice(2)
const [results] = args

const comment = generateCommentFromResults({results})

core.setOutput('comment', comment)
