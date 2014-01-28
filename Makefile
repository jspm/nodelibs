build: clean
	cp lib/console/index.js packaged/console.js

	echo "module.exports = " > packaged/constants.js
	cat lib/constants/constants.json >> packaged/constants.js

	cp lib/assert/assert.js packaged/assert.js
	cp lib/domain/index.js packaged/domain.js
	cp lib/events/events.js packaged/events.js
	cp lib/https/index.js packaged/https.js
	cp lib/os/browser.js packaged/os.js
	cp lib/path/index.js packaged/path.js
	cp lib/punycode/punycode.js packaged/punycode.js
	cp lib/tty/index.js packaged/tty.js
	cp lib/url.js packaged/url.js
	cp lib/util/util.js packaged/util.js
	cp lib/vm/index.js packaged/vm.js
	cp lib/timers/main.js packaged/timers.js
	cp lib/buffer/index.js packaged/buffer.js
	cp lib/string_decoder/index.js packaged/string_decoder.js

	cp lib/inherits/inherits_browser.js packaged/inherits.js
	cp lib/base64-js/lib/b64.js packaged/base64-js.js
	cp lib/Base64/base64.js packaged/Base64.js

	cp -r lib/crypto packaged/crypto
	echo "module.exports = require('./crypto/index');" > packaged/crypto.js

	rsync -rc --exclude=node_modules lib/http packaged/
	echo "module.exports = require('./http/index');" > packaged/http.js

	cp -r lib/stream packaged/stream
	echo "module.exports = require('./stream/index');" > packaged/stream.js

	cp -r lib/querystring packaged/querystring
	echo "module.exports = require('./querystring/index');" > packaged/querystring.js

	cp -r lib/zlib packaged/zlib
	echo "module.exports = require('./zlib/index');" > packaged/zlib.js

	cp -r lib/sha.js packaged/sha.js
	echo "module.exports = require('./sha.js/index');" > packaged/sha.js.js

	cp lib/ieee754/index.js packaged/ieee754.js

	jspm build

fetch: clean
	git submodule foreach git fetch origin master
	curl https://raw.github.com/joyent/node/master/lib/url.js > lib/url.js

clean:
	touch packaged/del
	rm -r packaged/*

	

	

