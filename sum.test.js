
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
// const fetchPromise = require("./sum")
// test("the data is peanut butter",()=>{
//     return expect(fetchPromise()).resolves.toBe('peanut butter')
// })
// test('the fetch fails with an error',()=>{
//     return expect(fetchPromise()).rejects.toThrow('error')
// })


9. // Async Await Asynchronous Code
// const fetchAsync = require('./sum')
// test("the data is peanut jam",async()=>{
//     const data  = await fetchAsync();
//     expect(data).toBe('peanut Jam')
// })


10. // Mock Functions and spies
// => Basic way
// const mockCallback =  jest.fn(x =>  42 + x)
// mockCallback(0)
// mockCallback(1)

// => Test Mode
// test("mock implementation of a basic function",()=>{
//     const mock = jest.fn(x => 42  + x)
//     expect(mock(1)).toBe(43);
//     expect(mock).toHaveBeenCalledWith(1)

// })


11. //Spies
// test('spying on a method of an object',()=>{
//     const video ={
//         play(){
//             return true
//         }
//     }
//     const spy = jest.spyOn(video,'play');
//     video.play()
//     expect(spy).toHaveBeenCalled()
//     spy.mockRestore()

// })


