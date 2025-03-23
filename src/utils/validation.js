export const checkValidation = (email, password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    if (!isEmailValid) {
        return { status: false, message: "Email ID not valid !" };
      }
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!isPasswordValid) {
      return { status: false, message: "Password not valid !" };
    }
  
     else return { status: true, message: "Validation successful !" };;
  };
  