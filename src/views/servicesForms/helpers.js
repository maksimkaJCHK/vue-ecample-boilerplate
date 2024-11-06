export const typeValidate = ({
  input,
  error,
  validateFunc
}) => {
  let isValid = true;
  error.value = '';

  const { isError, errorText } = validateFunc(input.value);

  if (isError) {
    error.value = errorText;
    isValid = !isError;
  }

  return { isValid };
}