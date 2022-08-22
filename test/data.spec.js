import functions from '../src/data.js'

describe('functions', () => {
  it('Debería ser un objeto', () => {
    expect(typeof functions).toBe('object')
  })
})

describe('functions.sortName', () => {
  it('Debería ser una función', () => {
    expect(typeof functions.sortName).toBe('function')
  })

  it('returns `functions.sortName` Az', () => {
    const sortAz = [{ name: 'A' }, { name: 'C' }, { name: 'B' }, { name: 'D' }]
    expect(functions.sortName(sortAz)).toEqual([{ name: 'A' }, { name: 'B' }, { name: 'C' }, { name: 'D' }])
  })

  it('returns `functions.sortName` zA', () => {
    const sortZa = [{ name: 'A' }, { name: 'D' }, { name: 'C' }, { name: 'B' }]
    expect(functions.sortName(sortZa)).toBe([{ name: 'D' }, { name: 'C' }, { name: 'B' }, { name: 'A' }])
  })
})

describe('functions.sortFilter', () => {
  it('Debería ser una función', () => {
    expect(typeof functions.sortFilter).toBe('function')
  })

  it('returns `functions.sortFilter`', () => {
    const filterData = [{ house: 'Gryffindor' }, { house: 'Ravenclaw' }, { house: 'Slytherin' }, { house: 'Hufflepuff' }]
    expect(functions.sortFilter(filterData)).toEqual([{ house: 'Gryffindor' }])
  })
})
