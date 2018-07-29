export const createError = (code, msg = 'error') => {
  // console.log(code, msg);
  const err = { msg, code };
  // err.code = code;
  return err;
};
