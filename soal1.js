const rumus = require("./rumus");

// Destructure all rumus functions from rumus.js file
const {
  rumusKelilingPersegi,
  rumusLuasPersegi,
  rumusKelilingPersegiPanjang,
  rumusLuasPersegiPanjang,
} = rumus;

// 1. Keliling persegi
rumusKelilingPersegi(2);

// 2. Luas persegi
rumusLuasPersegi(5);

// 3. Keliling persegi panjang
rumusKelilingPersegiPanjang(10, 2);

// 4. Luas persegi panjang
rumusLuasPersegiPanjang(10, 4);
