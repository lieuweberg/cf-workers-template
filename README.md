# Minimal JS Cloudflare Workers template
This assumes you already have wrangler [installed](https://developers.cloudflare.com/workers/cli-wrangler/install-update#install) and [set up](https://developers.cloudflare.com/workers/cli-wrangler/authentication#using-commands) and are familiar with JavaScript and can read the workers documentation.

**I will not be helping you with workers issues, this is purely a template similar to the [official template]() but is more minimal.**

Clone: `wrangler generate PROJECT_NAME https://github.com/lieuweberg/cf-workers-template`

Once it's cloned:
- enter a worker name in the wrangler.toml
- fill in the `account_id` in wrangler.toml

To deploy:
- `wrangler publish` to publish to a workers.dev subdomain.
- `wrangler publish --env production` to publish on your own domain. Be sure to fill in the two values under `[env.production]` in the wrangler.toml if you do this.

## License
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.