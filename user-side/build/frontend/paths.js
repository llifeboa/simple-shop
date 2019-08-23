/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const src = path.join(root, 'src', 'frontend');
const dist = path.join(root, 'dist');
const public = path.join(dist, 'public');
const assets = path.join(dist, 'assets');

module.exports = {
	root,
	src,
	dist,
	public,
	assets,
};
