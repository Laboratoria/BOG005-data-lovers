import functions from '../src/data.js'

describe('functions', () => {
  it('should be an object', () => {
    expect(typeof functions).toBe('object')
  })
})

describe('functions.sortName', () => {
  it('should be a function', () => {
    expect(typeof functions.sortName).toBe('function')
  })

  it('returns `functions.sortName`', () => {
    const mockData = [{ name: 'a' }, { name: 'c' }, { name: 'b' }, { name: 'd' }]
    expect(functions.sortName(mockData)).toEqual([{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }])
  })
})
