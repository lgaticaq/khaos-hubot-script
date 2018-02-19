// Description
//   {{description}}
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//   None
//
// Author:
//   {{owner}}

module.exports = robot => {
  robot.respond(/{{name}}/i, res => {
    res.send('{{name}}')
  })
}
