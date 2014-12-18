build: lib/node_modules clean

	mkdir packaged/assert packaged/domain packaged/events packaged/https packaged/os packaged/path packaged/process packaged/punycode packaged/tty packaged/url packaged/util packaged/timers packaged/buffer packaged/string_decoder packaged/fs
	mkdir packaged/console packaged/constants

	sed 's/require("date-now")/function() { return new Date().getTime(); }/' lib/node_modules/console-browserify/index.js > packaged/console/index.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('console') : require('./console/index');" > packaged/console.js

	echo "module.exports = " > packaged/constants/index.js
	cat lib/node_modules/constants-browserify/constants.json >> packaged/constants/index.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('constants') : require('./constants/index');" > packaged/constants.js

	sed 's/util\//util/g' lib/node_modules/assert/assert.js > packaged/assert/index.js
	cp lib/node_modules/domain-browser/index.js packaged/domain/index.js
	cp lib/node_modules/events/events.js packaged/events/index.js
	cp lib/node_modules/https-browserify/index.js packaged/https/index.js
	cp lib/node_modules/os-browserify/browser.js packaged/os/index.js
	cp lib/node_modules/path-browserify/index.js packaged/path/index.js
	cp lib/node_modules/process/browser.js packaged/process/index.js
	cp lib/node_modules/punycode/punycode.js packaged/punycode/index.js
	cp lib/node_modules/tty-browserify/index.js packaged/tty/index.js
	cp lib/node_modules/url/url.js packaged/url/index.js
	cp lib/node_modules/util/util.js packaged/util/index.js
	cp lib/node_modules/timers-browserify/main.js packaged/timers/index.js
	cp lib/node_modules/native-buffer-browserify/index.js packaged/buffer/index.js
	cp lib/node_modules/string_decoder/index.js packaged/string_decoder/index.js

	cp fs.js packaged/fs/index.js

	echo "module.exports = System._nodeRequire ? System._nodeRequire('assert') : require('./assert/index');" > packaged/assert.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('domain') : require('./domain/index');" > packaged/domain.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('events') : require('./events/index');" > packaged/events.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('https') : require('./https/index');" > packaged/https.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('os') : require('./os/index');" > packaged/os.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('path') : require('./path/index');" > packaged/path.js
	echo "module.exports = System._nodeRequire ? process : require('./process/index');" > packaged/process.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('punycode') : require('./punycode/index');" > packaged/punycode.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('tty') : require('./tty/index');" > packaged/tty.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('url') : require('./url/index');" > packaged/url.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('util') : require('./util/index');" > packaged/util.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('timers') : require('./timers/index');" > packaged/timers.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('buffer') : require('./buffer/index');" > packaged/buffer.js
	echo "module.exports = System._nodeRequire ? System._nodeRequire('string_decoder') : require('./string_decoder/index');" > packaged/string_decoder.js

	cp -r lib/node_modules/crypto-browserify packaged/crypto
	rm -r packaged/crypto/test
	rm -r packaged/crypto/example
	rm -r packaged/crypto/node_modules
	echo "var Buffer = require('buffer').Buffer;" > packaged/crypto/helpers.js
	echo "var Buffer = require('buffer').Buffer;" > packaged/crypto/rng.js
	echo "var Buffer = require('buffer').Buffer;" > packaged/crypto/index.js
	echo "var Buffer = require('buffer').Buffer;" > packaged/crypto/create-hmac.js
	echo "var Buffer = require('buffer').Buffer;" > packaged/crypto/create-hash.js
	cat lib/node_modules/crypto-browserify/helpers.js >> packaged/crypto/helpers.js
	cat lib/node_modules/crypto-browserify/rng.js >> packaged/crypto/rng.js
	cat lib/node_modules/crypto-browserify/index.js >> packaged/crypto/index.js
	cat lib/node_modules/crypto-browserify/create-hmac.js >> packaged/crypto/create-hmac.js
	cat lib/node_modules/crypto-browserify/create-hash.js >> packaged/crypto/create-hash.js
	echo "if (!System._nodeRequire) throw 'Browser Crypto not currently supported by jspm. Please post an issue.'; module.exports = System._nodeRequire('crypto');" > packaged/crypto.js

	mkdir packaged/util/support
	cp lib/node_modules/util/support/isBufferBrowser.js packaged/util/support/isBuffer.js

	echo "var indexof = [].indexOf?function(arr,obj){return arr.indexOf(obj)}:function(arr,obj){for(var i=0;i< arr.length;++i)if(arr[i]===obj)return i;return -1;};" > packaged/vm.js
	sed 1d lib/node_modules/vm-browserify/index.js >> packaged/vm.js

	cp -r lib/node_modules/http-browserify packaged/http
	rm -r packaged/http/test
	rm -r packaged/http/node_modules
	rm -r packaged/http/example
	echo "module.exports = System._nodeRequire ? System._nodeRequire('http') : require('./http/index');" > packaged/http.js

	cp -r lib/node_modules/stream-browserify packaged/stream
	rm -r packaged/stream/node_modules
	rm -r packaged/stream/test
	echo "module.exports = System._nodeRequire ? System._nodeRequire('stream') : require('./stream/index');" > packaged/stream.js

	cp -r lib/node_modules/querystring packaged/querystring
	rm -r packaged/querystring/test
	echo "module.exports = System._nodeRequire ? System._nodeRequire('querystring') : require('./querystring/index');" > packaged/querystring.js

	cp -r lib/node_modules/zlib-browserify packaged/zlib
	rm -r packaged/zlib/node_modules
	rm -r packaged/zlib/test
	echo "module.exports = System._nodeRequire ? System._nodeRequire('zlib') : require('./zlib/index');" > packaged/zlib.js

	echo "module.exports = System._nodeRequire ? System._nodeRequire('fs') : require('./fs/index');" > packaged/fs.js

	rm packaged/**/*.json
	rm packaged/**/*.markdown
	rm packaged/**/*.md
	rm packaged/**/.[^.]*

	jspm build

	echo "module.exports = System._nodeRequire('child_process');" > dist/child_process.js
	echo "module.exports = System._nodeRequire('cluster');" > dist/cluster.js
	echo "module.exports = System._nodeRequire('dgram');" > dist/dgram.js
	echo "module.exports = System._nodeRequire('dns');" > dist/dns.js
	echo "module.exports = System._nodeRequire('net');" > dist/net.js
	echo "module.exports = System._nodeRequire('readline');" > dist/readline.js
	echo "module.exports = System._nodeRequire('repl');" > dist/repl.js
	echo "module.exports = System._nodeRequire('tls');" > dist/tls.js

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
