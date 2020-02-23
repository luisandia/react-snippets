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
  if (isEmpty(data.email)) {
    errors.email = `Must not be empty`;
  }
  if (isEmpty(data.password)) {
    errors.password = `Must not be empty`;
  }
  return {
    errors,
    valid: Object.keys(errors).length === 0
  }
}

exports.reduceUserDetails = (data) => {
  let userDetails = {};

  if (!isEmpty(data.bio.trim())) {
    userDetails.bio = data.bio;
  }
  if (!isEmpty(data.website.trim())) {
    if (data.website.trim().substring(0, 4) !== 'http') {
      userDetails.website = `http://${data.website.trim()}`;
    } else {
      userDetails.website = data.website;
    }
  }
  if (!isEmpty(data.location.trim())) {
    userDetails.location = data.location;
  }
  return userDetails;
}