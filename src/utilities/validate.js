const validate = (value, rules) => {
  let isValid = true;

  for (let rule in rules) {

    switch (rule) {
      case 'isRequired': isValid = isValid && requiredValidator(value); break;

      case 'minLength': isValid = isValid && minLengthValidator(value, rules[rule]); break;

      case 'maxLength': isValid = isValid && maxLengthValidator(value, rules[rule]); break;

      case 'isEmail': isValid = isValid && emailValidator(value); break;

      case 'onlyNumbers': isValid = isValid && numbersValidator(value); break;

      case 'maskIsFilled': isValid = isValid && phoneMaskValidator(value); break;

      default: isValid = true;
    }

    if (!isValid) return rule;
    
  }
  return isValid;
}

const requiredValidator = value => {
  return value.toString().trim() !== '';
}

const minLengthValidator = (value, minLength) => {
  return value.length >= minLength;
}

const maxLengthValidator = (value, maxLength) => {
  return value.length <= maxLength;
}

const emailValidator = value => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value).toLowerCase());
}

const numbersValidator = value => {
  const re = /^[0-9]+$/;
  return re.test(String(value).toLowerCase());
}

const phoneMaskValidator = value => {
  const re = /^[^_]+$/;
  return re.test(String(value).toLowerCase());
}

export default validate;