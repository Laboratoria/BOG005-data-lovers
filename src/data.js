
const utilities = {

  orderByTitleAsc: function (arr) {
    const result = arr.sort((a, b) => {
      let ma = a.title.toUpperCase();
      let mb = b.title.toUpperCase();

      if (ma < mb) {
        return -1;
      }
      if (ma > mb){
        return 1; 
      }
      return 0;
    });
    return result; 
  },


  orderByTitleDesc: function (arr) {
    const result = arr.sort((a, b) => {
      let ma = a.title.toUpperCase();
      let mb = b.title.toUpperCase();

      if (ma > mb) {
        return -1;
      }
      if (ma < mb){
        return 1; 
      }
      return 0;
    });
    return result; 
  },

  orderByScore: function (arr){
    const result = arr.sort((a, b) => {
      let ma = a.rt_score.toLowerCase();
      let mb = b.rt_score.toLowerCase();

      if (ma < mb) {
        return -1;
      }
      if (ma > mb){
        return 1; 
      }
      return 0;
    });
    return result; 
  },

}



export default utilities;
