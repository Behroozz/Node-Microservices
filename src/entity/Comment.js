export default function buildMakeComment ({ Id, sanitize }) {
  return function makeComment({
    author,
    createdOn = Date.now(),
    id = Id.makeId(),
    published = false,
    text
  }) {
    // Business Rules
    if(!Id.isValidId(id)) {
      throw Error('Comment must have a valid id.')
    }
    if(!author) {
      throw Error('Comment must have an author.')
    }

    let sanitizedText = sanitize(text)
    console.log('sanitizedText',sanitizedText)

    return Object.freeze({
      getAuthor: () => author,
      getCreatedOn: () => createdOn,
      getPublished: () => published,
      getText: () => sanitizedText,
      markDeleted: () => {
        sanitizedText = 'Comment is deleted.',
        author = 'Author is deleted.'
      }
    })
  }
}