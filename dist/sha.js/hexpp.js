function toHex(e,t,r,n){e=e.buffer||e;for(var i="",o=e.byteLength||e.length,s=0;o>s;s++){var u=4294967292&s|(n?3-s%4:s%4);i=i+(e[u]>>4).toString(16)+(15&e[u]).toString(16)+(t-1==s%t?" ":"")+(r-1==s%r?"\n":"")}return i}function reverseByteOrder(e){return e<<24&4278190080|e<<8&16711680|e>>8&65280|e>>24&255}var hexpp=module.exports=function(e,t){return t=t||{},t.groups=t.groups||4,t.wrap=t.wrap||16,toHex(e,t.groups,t.wrap,t.bigendian,t.ints)};if(hexpp.defaults=function(e){return function(t){return hexpp(t,e)}},!module.parent){var b=new Buffer(64);console.log(hexpp(b)),console.log(hexpp(b,{bigendian:!0}))}