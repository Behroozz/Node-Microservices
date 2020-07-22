import makePostComment from './post-comment'
import { addComment } from '../useCases/index'

const postComment = makePostComment({ addComment })

const commentController = Object.freeze({
  postComment
})

export default commentController
export { postComment }