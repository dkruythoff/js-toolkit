import { expect } from 'chai'
import objectSortRecursive from './object-sort-recursive'

describe('objectSortRecursive', () => {

  it('Simple objects are ordered by key', () => {
    const input = { b: 'valB', a: 'valA' }
    const expectedOutput = { a: 'valA', b: 'valB' }
    const output = objectSortRecursive(input)
    expect(output).to.eql(expectedOutput)
  })

  it('Arrays are ordered by value', () => {
    const input = [1,4,'test',2]
    const expectedOutput = [1,2,4,'test']
    const output = objectSortRecursive(input)
    expect(output).to.eql(expectedOutput)
  })

  it('Mixed content is ordered as expected', () => {
    const input = [1,'string',4, { b: 'valB', a: 'valA' },'test',2]
    const expectedOutput = [1,2,4,{ a: 'valA', b: 'valB' },'string','test']
    const output = objectSortRecursive(input)
    expect(output).to.eql(expectedOutput)
  })

})