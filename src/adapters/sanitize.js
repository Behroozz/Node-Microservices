const sanitize = (text) => {
  return text.replace(/[,."'\n]+/g, '')
}

export default sanitize