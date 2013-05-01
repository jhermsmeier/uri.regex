
var assert = require( 'assert' )
var pattern = require( '../build' )

function test( uri, expected ) {
  var match = uri.match( pattern )
  assert.ok( match, uri )
  var actual = [].slice.call( match, 1 )
  assert.deepEqual( actual, expected )
}

describe( 'URI Regular Expression', function() {
  
  it( 'should match a (commonly found) URI', function() {
    test( 'http://user:password@example.com:8080/some/path/to/somewhere?search=regex&order=desc#fragment', [
      'http', '//', 'user:password', 'example.com', '8080', '/some/path/to/somewhere', 'search=regex&order=desc', 'fragment'
    ])
  })
  
  it( 'should match URIs with URI as hostname', function() {
    test( 'mina:tcp://mainframeip:4444?textline=true', [
      'mina', undefined, undefined, 'tcp://mainframeip', '4444', undefined, '?textline=true', undefined
    ])
  })
  
  it( 'should match IPv6 hosts', function() {
    test( 'ldap://[2001:db8::7]/c=GB?objectClass?one', [
      'ldap', '//', undefined, '[2001:db8::7]', undefined, '/c=GB?objectClass?one', undefined, undefined
    ])
  })
  
  it( 'should match URIs w/o authority', function() {
    test( 'urn:oasis:names:specification:docbook:dtd:xml:4.1.2', [
      'urn', undefined, undefined, undefined, 'oasis:names:specification:docbook:dtd:xml:4.1.2', undefined, undefined
    ])
  })
  
  it( 'should match RFC 3986\'s example URIs', function() {
    test( 'ftp://ftp.is.co.za/rfc/rfc1808.txt', [
      'ftp', '//', undefined, 'ftp.is.co.za', undefined, '/rfc/rfc1808.txt', undefined, undefined 
    ])
    test( 'http://www.ietf.org/rfc/rfc2396.txt', [
      'http', '//', undefined, 'www.ietf.org', undefined, '/rfc/rfc2396.txt', undefined, undefined
    ])
    test( 'mailto:John.Doe@example.com', [
      'mailto', undefined, 'John.Doe', 'example.com', undefined, undefined, undefined, undefined
    ])
    test( 'news:comp.infosystems.www.servers.unix', [
      'news', undefined, undefined, 'comp.infosystems.www.servers.unix', undefined, undefined, undefined, undefined
    ])
    test( 'tel:+1-816-555-1212', [
      'tel', undefined, undefined, '+1-816-555-1212', undefined, undefined, undefined, undefined
    ])
    test( 'telnet://192.0.2.16:80/', [
      'telnet', '//', undefined, '192.0.2.16', '80', '/', undefined, undefined
    ])
  })
  
})
