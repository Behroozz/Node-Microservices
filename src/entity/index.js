
// Cleanly separate business logic from dependencies

import Id from '../adapters/Id'
import sanitize from '../adapters/sanitize'

import buildComment from './Comment'

const makeComment = buildComment({Id, sanitize})

export default makeComment