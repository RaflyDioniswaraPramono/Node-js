/**
 *
 * @param {integer} sisi Panjang sisi dari persegi
 */
const rumusKelilingPersegi = (sisi) => {
  return console.log(
    `Rumus keliling persegi (s x 4) => ${sisi} x 4 = ${sisi * 4}.`
  );
};

/**
 *
 * @param {integer} sisi Panjang sisi dari persegi
 */
const rumusLuasPersegi = (sisi) => {
  return console.log(
    `Rumus luas persegi (s x s) => ${sisi} x ${sisi} = ${sisi * sisi}.`
  );
};

/**
 *
 * @param {integer} panjang Sisi panjang dari persegi panjang
 * @param {integer} lebar Sisi lebar dari persegi panjang
 */
const rumusKelilingPersegiPanjang = (panjang, lebar) => {
  return console.log(
    `Rumus keliling persegi panjang 2(p + l) => 2(${panjang} + ${lebar}) = ${
      2 * (panjang + lebar)
    }.`
  );
};

/**
 *
 * @param {integer} panjang Sisi panjang dari persegi panjang
 * @param {integer} lebar Sisi lebar dari persegi panjang
 */
const rumusLuasPersegiPanjang = (panjang, lebar) => {
  return console.log(
    `Rumus luas persegi panjang (p x l) => ${panjang} x ${lebar} = ${
      panjang * lebar
    }.`
  );
};

module.exports = {
  rumusKelilingPersegi,
  rumusLuasPersegi,
  rumusKelilingPersegiPanjang,
  rumusLuasPersegiPanjang,
};
