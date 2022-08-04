import { filterData, anotherExample } from '../src/data.js';
import data from './data/athletes/athletes.js';



describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns `filterData`', () => {
    expect(filterData(data, "sport", "Taekwondo"  )).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
