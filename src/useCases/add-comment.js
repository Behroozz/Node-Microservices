import makeComment from '../entity/index'

// We need to pass information to layers in a format or structure
// that is most convenient to that layer, here comment to user cases
export default function makeAddComment({ commentDB, initialReview }) {
  return function addComment(commentInfo) {
    const comment = makeComment(commentInfo)
    
    const isValid = initialReview(comment)
    if(isValid) {
      commentDB.insert({
        author: comment.getAuthor(),
        createdOn: comment.getCreatedOn(),
        published: comment.getPublished(),
        text: comment.getText()
      })
      return {
        operation: 'Inserted',
        status: 'success',
        itemAdded: {
          author: comment.getAuthor(),
          createdOn: comment.getCreatedOn(),
          published: comment.getPublished(),
          text: comment.getText()
        }
      }
    }
  }
}