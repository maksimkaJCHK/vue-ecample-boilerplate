export default class ValidateServices {
  patternsStrongPas = {
    'numeric': '0-9',
    'special': '!@#$%^&*',
    'latin_lower': 'a-z',
    'latin_upper': 'A-Z'
  }

  makeStrongPasRegExp(patterns, min, max) {
    let minF = min || ''; 
    let maxF = max || '';
    let regex_string = '';
    let rules = [];
    let range = "{" + minF + "," + maxF + "}";

    for (let rule in patterns) {
      if (patterns.hasOwnProperty(rule)) {
        rules.push(patterns[rule]);
        regex_string += "(?=.*[" + patterns[rule] + "])";
      }
    }

    regex_string += "[" + rules.join('') + "]" + range;
    return new RegExp(regex_string);
  }
}