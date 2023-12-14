
1. // Basic concept jest
const sum = require('./sum')
// test('sum function',()=>{
//     expect(sum(1,2)).toBe(3)
// })


2. // Basic concept jest
// test("two plus two is four",()=>{
//     expect(2+2).toBe(4)
// })


3. // Matchers  (toEqual)
// test('Object Assignment', () => {
//     const data = { one: 1 };
//     data['two'] = 2
//     expect(data).toEqual({ one: 1, two: 2 })
// })


4. // Matchers  (toBeFalsy)
// test('zero is falsy',()=>{
//     const n = 0;
//    expect(n).toBeFalsy()
// })


5. // Matchers  (toBeTruthy)
// test('one is falsy',()=>{
//     const n = 1;
//    expect(n).toBeTruthy()
// })


6. // Matchers (toThrow)
const myFunction = require('./sum')
// test('throws on invalid input',()=>{
//     expect(()=>{
//         myFunction('Not a number');
//     }).toThrow()
// })


7. // Asynchronous Code 
const fetchData = require("./sum")
//  test('the data is Peanut butter', done => {
//     function callback(data) {
//         try {
//             expect(data).toBe('Peanut butter')
//             done()

//         } catch (error) {
//             done(error)

//         }
//     }
//     fetchData(callback)
// }) 


8. // Promise Asynchronous Code
const fetchPromise = require("./sum")
test("the data is peanut butter",()=>{
    return expect(fetchPromise()).resolves.toBe('peanut butter')
})
test('the fetch fails with an error',()=>{
    return expect(fetchPromise()).rejects.toThrow('error')
})

