1. // Basic concept jest
// const sum = require('./sum')
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

4. // Matchers  (toBefalsy)
test('null is falsy',()=>{
    const n = 0
    expect(n).toBeFalsy()
})
