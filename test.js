const { test } = require('tap')
const getLanguageName = require('./index.js')

test('retrieve existing item', t => {
  t.equal(
    getLanguageName('application/javascript'),
    'javascript',
    'should retrieve existing language name'
  )
  t.end()
})

test('retrieve missing item', t => {
  t.equal(
    getLanguageName('application/foo'),
    undefined,
    'should return undefined'
  )
  t.end()
})
