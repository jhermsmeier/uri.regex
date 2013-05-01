
function URI( input ) {
  
  if( !(this instanceof URI) ) {
    return new URI( input )
  }
  
  var match = ( '' + input ).match( URI.pattern )
  if( !match ) { throw new SyntaxError( 'Invalid URI' ) }
  
  this.protocol  = match[1]
  this.slashes   = match[2]
  this.authority = match[3]
  this.host      = match[4]
  this.port      = match[5]
  this.path      = match[6] || match[7] || match[8]
  this.query     = match[9]
  this.hash      = match[10]
  
}

URI.pattern = require( './pattern' )

module.exports = URI
