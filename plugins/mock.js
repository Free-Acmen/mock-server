var { mock } = require('mockjs');

module.exports = (body) => {
  try {
    return mock(JSON.parse(body));
  } catch(e) {
  	console.log(e)
  }
  return body;
}