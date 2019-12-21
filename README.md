# content-type-to-language-name

[![NPM version](https://badge.fury.io/js/content-type-to-language-name.svg)](https://npmjs.org/package/content-type-to-language-name)
[![Build Status](https://travis-ci.org/npm/content-type-to-language-name.svg?branch=master)](https://travis-ci.org/npm/content-type-to-language-name)

Manually curated map of valid [mime](https://www.npmjs.com/package/mime) content-types to a list of valid [highlight.js](https://www.npmjs.com/package/highlight.js) language names.

## Install

```
npm install content-type-to-language-name
```

## Usage

You can retrieve the language name by using the default method:

```js
const getLanguage = require('content-type-to-language-name')
getLanguage('application/javascript') // javascript
```

also the raw map is available:

```js
const contentTypeToLanguageName = require('content-type-to-language-name').map
```

## LICENSE

[ISC](./LICENSE)
