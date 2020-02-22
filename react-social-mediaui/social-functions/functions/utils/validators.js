const isEmpty = (string) => {
  return string.trim() === '';
}

const isEmail = (email) => {
  const regEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  return email.match(regEx);
}

exports.validateSignUpData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "must not be empty";
  } else if (!isEmail(data.email)) {
    errors.email = `Must be a valid email address`;
  }

  if (isEmpty(data.password)) {
    errors.password = `Must not be empty`
  }
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = `Password must match`;
  }
  if (isEmpty(data.handle)) {
    errors.handle = `Must not be empty`;
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0
  }
}

exports.validateLoginData = (data) => {
  let errors = {};
  if (isEmpty(user.email)) {
    errors.email = `Must not be empty`;
  }
  if (isEmpty(user.password)) {
    errors.password = `Must not be empty`;
  }
  return {
    errors,
    valid: Object.keys(errors).length === 0
  }
}