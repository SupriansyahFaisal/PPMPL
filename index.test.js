// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("capitalize huruf pertama", () => {
    const expected = "Hello";
    const actual = capitalize("hello");
    expect(actual).toBe(expected);
  });

  test("tidak mengganti huruf pertama jika sudah capitalize", () => {
    const expected = "Hello";
    const actual = capitalize("Hello");
    expect(actual).toBe(expected);
  });

  test("return, jika kosong no input", () => {
    const expected = "";
    const actual = capitalize("");
    expect(actual).toBe(expected);
  });

  test('Mengembalikan nilai yang sama jika string terdiri dari campuran huruf angka dan simbol', () => {
    const expected = 'Hello 12345!@#$%^&*()_+-=[]{};:,./<>?';
    const actual = capitalize('Hello 12345!@#$%^&*()_+-=[]{};:,./<>?');
    expect(actual).toBe(expected);
  });

  test("String campuran huruf, angka, dan simbol:", () => {
    const expected = "Hello 12345!@#$%^&*()_+-=[]{};:,./<>?";
    const actual = capitalize("Hello 12345!@#$%^&*()_+-=[]{};:,./<>?");
    expect(actual).toMatch(expected); // `toMatch` untuk string regex match
  });

});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return []", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });

  it("Mengembalikan array kosong jika array kosong", () => {
    const expected = [];
    const actual = filterOddNumber([]);

    expect(actual).toEqual(expected);
  });

  it("Mengembalikan array kosong jika array hanya berisi angka ganjil", () => {
    const expected = [];
    const actual = filterOddNumber([1, 3, 5]);

    expect(actual).toEqual(expected);
  });

  it("Mengembalikan array dengan angka genap saja", () => {
    const expected = [2, 4, 6];
    const actual = filterOddNumber([1, 2, 3, 4, 5, 6]);
    expect(actual).toEqual(expected);
  });

  it("Mengembalikan array dengan urutan yang sama dengan array asli", () => {
    const expected = [2, 4, 6];
    const actual = filterOddNumber([1, 2, 3, 4, 5, 6]);
    expect(actual).toEqual(expected);
  });

  
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it('dapat menangani epoch date yang sangat besar', () => {
    const expected = 'Tue, 19 Jan 2038 03:14:07 GMT';
    const actual = epochDateToUTC(2147483647);
  });

  it('Mengonversi epoch date yang bernilai nol', () => {
    const expected = 'Thu, 01 Jan 1970 00:00:00 GMT';
    const actual = epochDateToUTC(0);
    expect(actual).toEqual(expected);
  });
  
  it("Mengembalikan error untuk epoch date yang tidak valid", () => {
    expect(() => EpochDateToUTC("invalid")).toThrow();
  });

  it('mengembalikan nilai string', () => {
    const actual = epochDateToUTC(1656762800);
  
    expect(typeof actual).toBe('string');
  });

});

