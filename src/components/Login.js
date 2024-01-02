import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  // we can use state variables but in this demo we will useRef
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(email, password)
    setErrorMessage(message);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login"
        />
      </div>
      <div>
        <form onSubmit = {(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-28 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
          <h1 className="font-bold text-3xl py-2">
            {signIn ? "Sign In" : "Sign Up"}
          </h1>
          {!signIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-800 rounded-lg"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
          <input
          ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
            {signIn ? "Sign In" : "Sign Up"}
          </button>
            <p>{errorMessage}</p>
          <p className="py-4" onClick={toggleSignIn}>
            {signIn ? "New to Netflix? Sign Up now" : ""}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
