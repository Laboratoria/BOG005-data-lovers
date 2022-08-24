// AQUI DEBE IR TODA LA LOGICA//

function sort(moviesData){
   return moviesData.sort(function(a, b) {
    var textA = a.title.toUpperCase() || a.name.toUpperCase();
    var textB = b.title.toUpperCase() || a.name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});
}
export {sort};
// import ghibli from "./data/ghibli/ghibli.js";
