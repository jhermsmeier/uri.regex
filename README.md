# URI Regular Expression [![Build Status](https://travis-ci.org/jhermsmeier/uri.regex.png?branch=master)](https://travis-ci.org/jhermsmeier/uri.regex)

I found a perfectly working regular expression on [jmrware.com](http://jmrware.com/articles/2009/uri_regexp/URI_regex.html),
stole it and added capture groups for the various parts. All credit for that regex goes to Jeff Roberson.

### Example Usage of uri.js

```javascript
var URI = require( './uri.js' )
var input = 'http://user:password@example.com:8080/some/path/to/somewhere?search=regex&order=desc#fragment'

var uri = new URI( input ) // =>
{
  protocol:  'http',                      // match[1]
  slashes:   '//',                        // match[2]
  authority: 'user:password',             // match[3]
  host:      'example.com',               // match[4]
  port:      '8080',                      // match[5]
  path:      '/some/path/to/somewhere',   // match[6] || match[7] || match[8]
  query:     'search=regex&order=desc',   // match[9]
  hash:      'fragment'                   // match[10]
}
```
