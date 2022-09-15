const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();
  const allFilm = [...theaterIXX, ...theaterVGC];
  
  let countEmosi = 0;
  
  allFilm.forEach((film) => {
    if (film.hasil === emosi) {
      countEmosi++;
    }
  });
  return countEmosi;
}

module.exports = {
  promiseOutput,
};
