build: lib/node_modules clean
	cp lib/node_modules/console-browserify/index.js packaged/console.js

	echo "module.exports = " > packaged/constants.js
	cat lib/node_modules/constants-browserify/constants.json >> packaged/constants.js

	cp lib/node_modules/assert/assert.js packaged/assert.js
	cp lib/node_modules/domain-browser/index.js packaged/domain.js
	cp lib/node_modules/events-browserify/events.js packaged/events.js
	cp lib/node_modules/https-browserify/index.js packaged/https.js
	cp lib/node_modules/os-browserify/browser.js packaged/os.js
	cp lib/node_modules/path-browserify/index.js packaged/path.js
	cp lib/node_modules/punycode/punycode.js packaged/punycode.js
	cp lib/node_modules/tty-browserify/index.js packaged/tty.js
	cp lib/node_modules/url/url.js packaged/url.js
	cp lib/node_modules/util/util.js packaged/util.js
	cp lib/node_modules/timers-browserify/main.js packaged/timers.js
	cp lib/node_modules/native-buffer-browserify/index.js packaged/buffer.js
	cp lib/node_modules/string_decoder/index.js packaged/string_decoder.js

	mkdir packaged/support
	cp lib/node_modules/util/support/isBufferBrowser.js packaged/support/isBuffer.js

	echo "var indexof = [].indexOf?function(arr,obj){return arr.indexOf(obj)}:function(arr,obj){for(var i=0;i< arr.length;++i)if(arr[i]===obj)return i;return -1;};" > packaged/vm.js
	sed 1d lib/node_modules/vm-browserify/index.js >> packaged/vm.js

	cp -r lib/node_modules/http-browserify packaged/http
	rm -r packaged/http/node_modules
	rm -r packaged/http/example
	echo "module.exports = require('./http/index');" > packaged/http.js

	cp -r lib/node_modules/stream-browserify packaged/stream
	rm -r packaged/stream/node_modules
	echo "module.exports = require('./stream/index');" > packaged/stream.js
	cp patches/stream.js packaged/stream/stream.js
	cp patches/stream-index.js packaged/stream/index.js

	cp -r lib/node_modules/querystring packaged/querystring
	echo "module.exports = require('./querystring/index');" > packaged/querystring.js

	cp -r lib/node_modules/zlib-browserify packaged/zlib
	rm -r packaged/zlib/node_modules
	echo "module.exports = require('./zlib/index');" > packaged/zlib.js

	jspm build

fetch:
	cd lib
	npm install --production

lib/node_modules:
	cd lib
	npm install --production

clean:
	touch packaged/rm
	rm -r packaged/*

cleanfetch:
	rm -r lib/node_modules
	

	

