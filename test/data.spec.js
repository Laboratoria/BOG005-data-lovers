import utilities from '../src/data.js';

describe('utilities', () => {
  it('should be an object', () => {
    expect(typeof utilities).toBe('object');
  });
});

  describe('utilities.sortData', () => {
    it('should be a function', () => { 
      expect(typeof utilities.sortData).toBe('function');
    });

    it('returns `utilities.sortData`', () => {
      const mockData =  [{title:"a"}, {title:"c"}, {title:"b"}, {title:"d"}]
    expect(utilities.sortData(mockData)).toEqual([{title:"a"}, {title:"b"}, {title:"c"}, {title:"d"}]);
  });
}); 

describe('utilities.filterData', () => {
  it('should be a function', () => {
    expect(typeof utilities.filterData).toBe('function');
  });

  it('returns `utilities.filterData`', () => {
    const useData =  [{rt_score:"98"}, {rt_score:"100"}, {rt_score:"90"}, {rt_score:"83"}]
  expect(utilities.filterData(useData)).toEqual([{rt_score:"98"}, {rt_score:"100"}]);
});

});
