export default function makePostComment({ addComment }) {
  return function postComment({
    author,
    text
  }) {
    const posted = addComment({
      author,
      text
    })
    return {
      status: 200,
      posted
    }
  }
}