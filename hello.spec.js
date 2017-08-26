const helloFn = require('./hello')

test('hello',() => {//name testcase
  // Arrange
  let name = 'gun'

  // Act
  let result = helloFn(name)

  // Assert
  expect(result).toBe('Hello gun')
})
