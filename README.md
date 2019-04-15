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

## Run Webpack

To run webpack type
`npm run build`

## NPM Modules
HtmlWebpackplugin `html-webpack-plugin` - Used to dynamically create html file from which webpack bundles can be served

CleanWebpackPlugin `clean-webpack-plugin` - Used to clean up the `dist` folder of all old webpack generated files before each build.

## The Manifest 
Used to track how all the modules map to the output bundles.

## Source Maps

JavaScript offers source maps, which maps your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.

 [source maps](https://blog.teamtreehouse.com/introduction-source-maps)