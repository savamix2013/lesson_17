const assert = require('assert');
const { validatePassword } = require('./lesson18.js'); // Підключіть файл, де знаходиться функція validatePassword

var describe = ('Password Validation', () => {
  it('should return true for a valid password', () => {
    const password = '';
    assert.strictEqual(validatePassword(password), true);
  });

  it('should return false for a password shorter than 8 characters', () => {
    const shortPassword = '';
    assert.strictEqual(validatePassword(shortPassword), false);
  });

  it('should return false for a password without uppercase characters', () => {
    const passwordWithoutUppercase = '';
    assert.strictEqual(validatePassword(passwordWithoutUppercase), false);
  });

  it('should return false for a password without lowercase characters', () => {
    const passwordWithoutLowercase = '';
    assert.strictEqual(validatePassword(passwordWithoutLowercase), false);
  });

  it('should return false for a password without numbers', () => {
    const passwordWithoutNumbers = '';
    assert.strictEqual(validatePassword(passwordWithoutNumbers), false);
  });

  it('should return false for a password without special characters', () => {
    const passwordWithoutSpecialChars = '';
    assert.strictEqual(validatePassword(passwordWithoutSpecialChars), false);
  });
});
