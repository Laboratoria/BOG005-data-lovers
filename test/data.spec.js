import { filter } from '../src/data.js';
// import data from './data/athletes/athletes.js';



describe('filter', () => {
  it('debería ser un objeto', () => {
    expect(typeof filter).toBe('object');
  });

  describe('filter.filterData', () => {
    it('debería ser una función', () => {
      expect(typeof filter.filterData).toBe('function');
    });


});
})
