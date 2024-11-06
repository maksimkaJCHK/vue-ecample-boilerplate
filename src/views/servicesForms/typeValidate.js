import validateForm from '@/helpers/validateForm';

export const validateName = (val) => {
  const { isError, errorText } = validateForm.setVal(val)
    .isRequired('Введите ваше имя')
    .isNoSpaces('Имя не может содержать пробелы')
    .isNoNumb('Имя не может сожердать цифры')
    .isNoLatinLetters('Имя не может содержать латинские буквы')
    .min(2, 'Имя не может быть короче 2 символов');

  return { isError, errorText };
}

export const validateLastName = (val) => {
  const { isError, errorText } = validateForm.setVal(val)
    .isRequired('Введите вашу фамилию')
    .isNoSpaces('Фамилия не может содержать пробелы')
    .isNoNumb('Фамилия не может сожердать цифры')
    .isNoLatinLetters('Фамилия не может содержать латинские буквы')
    .min(2, 'Фамилия не может быть короче 2 символов');

  return { isError, errorText };
}

export const validateLogin = (val) => {
  const { isError, errorText } = validateForm.setVal(val)
    .isRequired('Введите логин')
    .isNoRusText('Логин не может содердать русские буквы')
    .min(3, 'Логин не может быть короче 3 символов')
    .isNoSpaces('Логин не может содержать пробелы');

  return { isError, errorText };
}

export const validatePassword = (val) => {
  const { isError, errorText } = validateForm.setVal(val)
    .isRequired('Введите пароль')
    .isNoSpaces('Пароль не может содержать пробелы')
    .isNoRusText('Пароль не может содержать русские буквы')
    //.min(6, 'Пароль не может быть короче 6 символов')
    //.isManyRepeat(3, 'Пароль слишком простой, слишком много повторяющихся символов');
    .isStrongPassword('Пароль должен содержать цифры, строчные, заглавые буквы и спецсимволы, и лежать в диапозоне от 6 до 30 символов', 6, 30)

  return { isError, errorText };
}

export const validateConfirmPas = (val, confirmVal) => {
  const { isError, errorText } = validateForm.setVal(val)
    .isIdenticalWords(confirmVal, 'Пароли не совпадают');

  return { isError, errorText };
}

export const validateEmail = (val) => {
  const { errorText, isError } = validateForm.setVal(val)
    .isRequired('Введите email')
    .isNoSpaces('Поле email не может содержать пробелы')
    .isEmail('Введен не корректный email');

  return { isError, errorText };
}