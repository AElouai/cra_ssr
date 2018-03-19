/*
* Node doesn't have native support for import/export yet.
* You can't use import/export without Babel or some other packager/bundler/transpiler,
 * Either use Node's own modules, or a packager/bundler/transpiler.
* */

// Ignore those pesky styles
require('ignore-styles');

// Set up babel to do its thing... env for the latest toys, react-app for CRA
require('babel-register')({
    ignore: /\/(build|node_modules)\//,
    presets: ['env', 'react-app']
});

// Now that the nonsense is over... load up the server entry point
require('./server');
