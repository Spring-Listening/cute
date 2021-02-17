/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (326359613@qq.com)
 * @Date: 2021-02-15 13:50:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-02-15 14:49:34
 */

test('common matcher', () => {
  expect(2+2).toBe(4)
  expect(2+2).not.toBe(5)
})
test('to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('number', () => {
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})

test('object', () => {
  expect({name: 'viking'}).toEqual({name: 'viking'})
})