export const checkValidateData = (email, password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/.test(password);
  
    if (!isEmailValid) return "Email not valid";
    if (!isPasswordValid) return "Password not valid";
  
    return true; // Or a more informative message like "Credentials valid";
  };
  