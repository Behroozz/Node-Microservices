export default function makeCommentDB({ makeDB }) {
  return Object.freeze({
    findById,
    insert
  })
  function findById ({ id }) {
    const db = makeDB()
    return db.filter(comment => comment.id === id)
  }

  function insert ({ author, createdOn, id, published, text}) {
    const db = makeDB()
    return db.push({
      author,
      createdOn,
      id,
      published,
      text
    })
  }
}