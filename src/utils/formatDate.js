const {
  fromUnixTime
 } = require('date-fns')

const formatDate = (timestamp) => {
  const date = fromUnixTime(timestamp)
  
  return date.toDateString()
}


module.exports = formatDate