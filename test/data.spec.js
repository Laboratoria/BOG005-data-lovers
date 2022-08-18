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
    const sortAz = [{ name: 'a' }, { name: 'c' }, { name: 'b' }, { name: 'd' }]
    expect(functions.sortName(sortAz)).toEqual([{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }])
  })
})

describe('functions.sortFilter', () => {
  it('should be a function', () => {
    expect(typeof functions.sortFilter).toBe('function')
  })

  it('returns `functions.sortFilter`', () => {
    const filterData = [{ house: 'Gryffindor' }, { house: 'Ravenclaw' }, { house: 'Slytherin' }, { house: 'Hufflepuff' }]
    expect(functions.sortFilter(filterData)).toEqual([{ house: 'Gryffindor' }])
  })
})
