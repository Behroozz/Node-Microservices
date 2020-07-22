import makeAddComment from './add-comment'
import commentDB from '../data-access/index'

// Example of stub the functionality
const addComment = makeAddComment({
  commentDB, 
  initialReview: () => { return true }
})

const commentService = Object.freeze({
  addComment
})

export default commentService
export {
  addComment
}