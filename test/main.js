
require( '../build' )

var assert = require( 'assert' )
var URI = require( '../uri' )

function test( input, expected ) {
  assert.deepEqual( new URI( input ), expected )
}

describe( 'URI Regular Expression', function() {
  
  it( 'should match a (commonly found) URI', function() {
    test( 'http://user:password@example.com:8080/some/path/to/somewhere?search=regex&order=desc#fragment', {
      protocol: 'http',
      slashes: '//',
      authority: 'user:password',
      host: 'example.com',
      port: '8080',
      path: '/some/path/to/somewhere',
      query: 'search=regex&order=desc',
      hash: 'fragment'
    })
  })
  
  it( 'should match URIs with URI as hostname', function() {
    test( 'mina:tcp://mainframeip:4444?textline=true', {
      protocol: 'mina',
      slashes: undefined,
      authority: undefined,
      host: undefined,
      port: undefined,
      path: 'tcp://mainframeip:4444',
      query: 'textline=true',
      hash: undefined
    })
  })
  
  it( 'should match IPv6 hosts', function() {
    test( 'ldap://[2001:db8::7]/c=GB?objectClass?one', {
      protocol: 'ldap',
      slashes: '//',
      authority: undefined,
      host: '[2001:db8::7]',
      port: undefined,
      path: '/c=GB',
      query: 'objectClass?one',
      hash: undefined
    })
  })
  
  it( 'should match URIs w/o authority', function() {
    test( 'urn:oasis:names:specification:docbook:dtd:xml:4.1.2', {
      protocol: 'urn',
      slashes: undefined,
      authority: undefined,
      host: undefined,
      port: undefined,
      path: 'oasis:names:specification:docbook:dtd:xml:4.1.2',
      query: undefined,
      hash: undefined
    })
  })
  
  it( 'should match unicode hostnames', function() {
    test( 'https://www.日本平.jp', {
      protocol: 'https',
      slashes: '//',
      authority: undefined,
      host: 'https://www.日本平.jp',
      port: undefined,
      path: undefined,
      query: undefined,
      hash: undefined
    })
  })
  
  it( 'should match punycode hostnames', function() {
    test( 'http://www.xn--gwtq9nb2a.jp', {
      protocol: 'http',
      slashes: '//',
      authority: undefined,
      host: 'www.xn--gwtq9nb2a.jp',
      port: undefined,
      path: undefined,
      query: undefined,
      hash: undefined
    })
  })
  
  it( 'should match RFC 3986\'s example URIs', function() {
    test( 'ftp://ftp.is.co.za/rfc/rfc1808.txt', {
      protocol: 'ftp',
      slashes: '//',
      authority: undefined,
      host: 'ftp.is.co.za',
      port: undefined,
      path: '/rfc/rfc1808.txt',
      query: undefined,
      hash: undefined
    })
    test( 'http://www.ietf.org/rfc/rfc2396.txt', {
      protocol: 'http',
      slashes: '//',
      authority: undefined,
      host: 'www.ietf.org',
      port: undefined,
      path: '/rfc/rfc2396.txt',
      query: undefined,
      hash: undefined
    })
    test( 'mailto:John.Doe@example.com', {
      protocol: 'mailto',
      slashes: undefined,
      authority: 'John.Doe',
      host: 'example.com',
      port: undefined,
      path: undefined,
      query: undefined,
      hash: undefined
    })
    test( 'news:comp.infosystems.www.servers.unix', {
      protocol: 'news',
      slashes: undefined,
      authority: undefined,
      host: 'comp.infosystems.www.servers.unix',
      port: undefined,
      path: undefined,
      query: undefined,
      hash: undefined
    })
    test( 'tel:+1-816-555-1212', {
      protocol: 'tel',
      slashes: undefined,
      authority: undefined,
      host: undefined,
      port: undefined,
      path: '+1-816-555-1212',
      query: undefined,
      hash: undefined
    })
    test( 'telnet://192.0.2.16:80/', {
      protocol: 'telnet',
      slashes: '//',
      authority: undefined,
      host: '192.0.2.16',
      port: '80',
      path: '/',
      query: undefined,
      hash: undefined
    })
  })
  
})
