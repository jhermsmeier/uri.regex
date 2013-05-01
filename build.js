
var fs = require( 'fs' )

var pattern = fs.readFileSync(
  __dirname + '/uri.regex', 'utf8'
)

pattern = pattern
  // Remove comments
  .replace( /(^|\s)#\s.+/g, '' )
  // Collapse whitespace
  .replace( /\s+/g, '' )

module.exports = pattern

fs.writeFileSync(
  __dirname + '/pattern.js',
  'module.exports = new RegExp( '+JSON.stringify( pattern )+' )'
)
