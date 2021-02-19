import { expect } from 'chai'
import objectDeepMerge from './object-deep-merge'

describe('objectDeepMerge', () => {
  it('Handles complex input', () => {
    const obj1 = {
      a: 1,
      b: 1, 
      c: { x: 1, y: 1 },
      d: [ 1, 1 ]
    }
    const obj2 = {
      b: 2, 
      c: { y: 2, z: 2 },
      d: [ 2, 2 ],
      e: 2
    }
    const obj3 = {
      d: { a: 3 },
      e: 3
    }
    const expectedOutput = {
      a: 1,
      b: 2,
      c: {
        x: 1,
        y: 2,
        z: 2
      },
      d: {
        0: 1,
        1: 2,
        a: 3
      },
      e: 3
    }
    expect(objectDeepMerge(obj1,obj2,obj3)).to.eql(expectedOutput)
  })
})