import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Using adapter-node to produce a self-contained Node.js server.
		// After running `npm run build`, start with: `node build/index.js`
		adapter: adapter({
			out: 'build'
		})
	}
};

export default config;
