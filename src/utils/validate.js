export const checkEmailValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password
    );
  // const isPasswordValid =
  //  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/.test(
  //     password
  //   );

  if (!isEmailValid) return "Email is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  return null;
};
