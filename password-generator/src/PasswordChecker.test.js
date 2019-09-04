const checkPassword = require('./PasswordChecker')

test('password takes one parameter and returns an object', () => {
    expect(checkPassword('cakePudd1ng')).toEqual({ 
        score: 4, 
        hasLowerCase: true, 
        hasUpperCase: true,
        hasNumber: true,
        hasNonAlphaNumeric: false,
        isOver8Char: true,
        isOver12Char: false
      })
})

test('1 point for lowercase', () => {
    expect( checkPassword('pudding') ).toEqual({ 
      score: 1,
      hasLowerCase: true, 
      hasUpperCase: false,
      hasNumber: false,
      hasNonAlphaNumeric: false,
      isOver8Char: false,
      isOver12Char: false
    })
  }) 


test('1 point for uppercase', () => {
  expect( checkPassword('PUDDING') ).toEqual({ 
    score: 1,
    hasLowerCase: false, 
    hasUpperCase: true,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false
  })
}) 

test('1 point for non-alpha numeric characters', () => {
    expect( checkPassword('!#$.&') ).toEqual({ 
      score: 1,
      hasLowerCase: false, 
      hasUpperCase: false,
      hasNumber: false,
      hasNonAlphaNumeric: true,
      isOver8Char: false,
      isOver12Char: false
    })
  }) 

  test('2 point for 8 characters or more', () => {
    expect( checkPassword('puddings') ).toEqual({ 
      score: 2,
      hasLowerCase: true, 
      hasUpperCase: false,
      hasNumber: false,
      hasNonAlphaNumeric: false,
      isOver8Char: true,
      isOver12Char: false
    })
  }) 
  
  test('3 point for 12 characters or more', () => {
    expect( checkPassword('cakepuddings') ).toEqual({ 
      score: 3,
      hasLowerCase: true, 
      hasUpperCase: false,
      hasNumber: false,
      hasNonAlphaNumeric: false,
      isOver8Char: true,
      isOver12Char: true
    })
  }) 

  test('6 point for the best password', () => {
    expect( checkPassword('Ca$3puddings') ).toEqual({ 
      score: 6,
      hasLowerCase: true, 
      hasUpperCase: true,
      hasNumber: true,
      hasNonAlphaNumeric: true,
      isOver8Char: true,
      isOver12Char: true
    })
  })