function InputError({ error, darkMode }) {
  return (
    <p className={`inputError ${darkMode ? 'drk-inputError' : ''}`}>{error}</p>
  );
}

export default InputError;
