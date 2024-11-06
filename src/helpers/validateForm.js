import ValidateServices from './validateServices.js';

class Validate extends ValidateServices {
  value = '';
  isError = false;
  errorText = '';
  emailRegExp = '[a-zA-Z0-9_-]{1,}@[a-zA-Z0-9_-]{1,}[.][a-zA-Z]{2,3}\\b';

  setVal(val) {
    this.value = val;
    this.isError = false;
    this.errorText = '';

    return this;
  }

  setError(errorText) {
    this.isError = true;
    this.errorText = errorText;
  }

  trim() {
    this.value = this.value.trim();

    return this;
  }

  isRequired(errorText = "Error") {
    if (!this.isError && !this.value.length) {
      this.setError(errorText);
    }

    return this;
  }

  min(numb, errorText = "Error") {
    if (!this.isError && this.value.length < numb) {
      this.setError(errorText);
    }

    return this;
  }

  max(numb, errorText = "Error") {
    if (!this.isError && this.value.length > numb) {
      this.setError(errorText);
    }

    return this;
  }

  isManyRepeat(numb = 2, errorText = "Error") {
    if (!this.isError) {
      const nSim = [ ...new Set(this.value.split(''))].length;

      if (nSim <= numb) this.setError(errorText);
    }

    return this;
  }

  isNoRusText(errorText = "Error") {
    if (!this.isError && new RegExp('[а-яА-я]', 'gi').test(this.value)) {
      this.setError(errorText);
    }

    return this;
  }

  isNoLatinLetters(errorText = "Error") {
    if (!this.isError && new RegExp('[a-zA-z]', 'gi').test(this.value)) {
      this.setError(errorText);
    }

    return this;
  }

  isNoNumb(errorText = "Error") {
    if (!this.isError && new RegExp('\\d', 'gi').test(this.value)) {
      this.setError(errorText);
    }

    return this;
  }

  isNoSpaces(errorText = "Error") {
    if (!this.isError && new RegExp('\\s', 'g').test(this.value)) {
      this.setError(errorText);
    }

    return this;
  }

  isEmail(errorText = "Error") {
    if (!this.isError && !(new RegExp(this.emailRegExp).test(this.value))) {
      this.setError(errorText);
    }

    return this;
  }

  isIdenticalWords(word, errorText = "Error") {
    if (!this.isError && (word !== this.value || !word.length)) {
      this.setError(errorText);
    }

    return this;
  }

  isStrongPassword(errorText = "Error", min = 6, max = 12) {
    const exp = this.makeStrongPasRegExp(this.patternsStrongPas, min, max);
    const isRange = this.value.length > max;

    if ((!this.isError && !(new RegExp(exp).test(this.value))) || isRange) {
      this.setError(errorText);
    }

    return this;
  }
}

const validateForm = new Validate();

export default validateForm;