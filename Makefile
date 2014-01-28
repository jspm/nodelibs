build: clean
	cp lib/console/index.js dist/console.js

	echo "module.exports = " > dist/constants.js
	cat lib/constants/constants.json >> dist/constants.js

	cp lib/assert/assert.js dist/assert.js
	cp lib/domain/index.js dist/domain.js
	cp lib/events/events.js dist/events.js
	cp lib/https/index.js dist/https.js
	cp lib/os/browser.js dist/os.js
	cp lib/path/index.js dist/path.js
	cp lib/punycode/punycode.js dist/punycode.js
	cp lib/tty/index.js dist/tty.js
	cp lib/url.js dist/url.js
	cp lib/util/util.js dist/util.js
	cp lib/vm/index.js dist/vm.js
	cp lib/timers/main.js dist/timers.js
	cp lib/buffer/index.js dist/buffer.js
	cp lib/string_decoder/index.js dist/string_decoder.js

	cp lib/inherits/inherits_browser.js dist/inherits.js
	cp lib/base64-js/lib/b64.js dist/base64-js.js
	cp lib/Base64/base64.js dist/Base64.js

	cp -r lib/crypto dist/crypto
	echo "module.exports = require('./crypto/index');" > dist/crypto.js

	rsync -rc --exclude=node_modules lib/http dist/http
	echo "module.exports = require('./http/index');" > dist/http.js

	cp -r lib/stream dist/stream
	echo "module.exports = require('./stream/index');" > dist/stream.js

	cp -r lib/querystring dist/querystring
	echo "module.exports = require('./querystring/index');" > dist/querystring.js

	cp -r lib/zlib dist/zlib
	echo "module.exports = require('./zlib/index');" > dist/zlib.js

	cp -r lib/sha.js dist/sha.js
	echo "module.exports = require('./sha.js/index');" > dist/sha.js.js

	cp lib/ieee754/index.js dist/ieee754.js

fetch: clean
	git submodule foreach git fetch origin master
	curl https://raw.github.com/joyent/node/master/lib/url.js > lib/url.js

clean:
	touch dist/del
	rm -r dist/*

	

	

