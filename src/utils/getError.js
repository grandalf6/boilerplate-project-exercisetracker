const getError = (key) => {
  switch(key) {
    case 'INVALID_USER':
      return {
        error: "invalid user"
      }

    default:
      return {
        error: 'unknown error'
      }
  }
}

module.export = getError