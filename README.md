Webpack Demo
=======

## Getting Started

This repo will be used to better understand the contructs and uses of webpack 

Webpack is used to compile JavaScript modules. Once installed, you can interface with webpack either from its CLI or API.

## Concepts

**Modules** - discrete chunks of functionality, they can express their dependencies in a variety of ways (e.g. import statement)

 [modules](https://webpack.js.org/concepts/modules/)

**Supported Modules Types**
webpack supports modules written in a variety of languages and preprocessors, via loaders. Loadersdescribe to webpack how to process non-JavaScript modules and include these dependencies into your bundles

**Loaders**
Webpack enables use of loaders to preprocess files. This allows you to bundle any static resource way beyond Javascript.

## Basic Setup

```
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack --save-dev
npm install webpack-cli --save-dev
```

Create the following files
1. README.md file
2. .gitignore file
3. webpack.config.js file
4. dist directory for webpack files
5. add npm scripts to package.json

## Run Webpack

To run webpack type
`npm run build`

## NPM Modules
HtmlWebpackplugin `html-webpack-plugin` - Used to dynamically create html file from which webpack bundles can be served

CleanWebpackPlugin `clean-webpack-plugin` - Used to clean up the `dist` folder of all old webpack generated files before each build.

## The Manifest 
Used to track how all the modules map to the output bundles.

# Development 

Choosing a Develpment Tool
======

1. webpack's Watch Mode

package.json
```
 "scripts": {
 	"watch": "webpack --watch"
 }
```

2. webpack-dev-server 

```
npm install --save-dev webpack-dev-server
```

webpack.config.js
```
devServer: {
	contentBase: './dist'
}
```

package.json
```
 "scripts": {
 	"start": "webpack-dev-server --open"
 }
```

3. webpack-dev-middleware

```
npm install --save-dev express webpack-dev-middleware
```

webpack.config.json
```
output: {
	publicPath: '/'
}
```
server.js 
```
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
```

package.json
```
"scripts": {
	"server": "node server.js",	
}
```
## Source Maps

JavaScript offers source maps, which maps your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.

 [source maps](https://blog.teamtreehouse.com/introduction-source-maps)

Using source maps allows developers to maintain a straight-forward debugging environment while at the same time optimizing their sites for performance.

In this post you have learned how source maps work and seen how you can generate them using UglifyJS. If you ever ship websites with compressed assets (which you should), it’s really worth taking the time to integrate source map creation into your workflow.

package.json
```
devtool: 'inline-source-map'
```

## Code Splitting

Code splitting is one of the most compelling features of webpack. This feature allows you to split your code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which, if used correctly, can have a major impact on load time.

* Entry Points: Manually split code using `entry` configuration.
* Prevent Duplication: Use the `SplitChunksPlugin` to dedupe and split chunks.
* Dynamic Imports: Split code via inline function calls within modules.