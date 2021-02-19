import { expect } from 'chai'
import objectPathGet from './object-path-get'

describe('objectPathGet', () => {

  it('can fetch inside an object with given path', () => {
    const obj = { a: { b: { c: 2 } } }
    expect(objectPathGet(obj, ['a','b','c'])).to.eql(2)
  })

  it('returns undefined when path not found', () => {
    const obj = { a: { b: { c: 2 } } }
    expect(objectPathGet(obj, ['a','b','d'])).to.eql(undefined)
  })

})