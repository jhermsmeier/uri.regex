
var assert = require( 'assert' )
var pattern = require( '../build' )

function test( uri, expected ) {
  var match = uri.match( pattern )
  var actual = [].slice.call( match, 1 )
  assert.deepEqual( actual, expected )
}

describe( 'URI Regular Expression', function() {
  
  it( 'should match a (commonly found) URI', function() {
    test( 'http://user:password@example.com:8080/some/path/to/somewhere?search=regex&order=desc#fragment', [
      'http', '//', 'user:password', 'example.com', '8080', '/some/path/to/somewhere', 'search=regex&order=desc', 'fragment'
    ])
  })
  
  it( 'should match URIs with URI as hostname correctly', function() {
    test( 'mina:tcp://mainframeip:4444?textline=true', [
      'mina', undefined, undefined, 'tcp://mainframeip', '4444', undefined, '?textline=true', undefined
    ])
  })
  
})
