/**
 * Validates if the given email is in a correct format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is valid, otherwise false.
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates if the given password meets the required criteria.
 * @param {string} password - The password to validate.
 * @returns {boolean} - Returns true if the password is valid, otherwise false.
 */
function isValidPassword(password) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

export const validate = async (email, password) => {
  if (!isValidEmail(email)) {
    throw new Error("Invalid email format");
  }
  if (!isValidPassword(password)) {
    throw new Error("Invalid password");
  }
  return true;
};
