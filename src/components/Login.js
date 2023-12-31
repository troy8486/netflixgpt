import Header from "./Header";

const Login = () => {
  return (
    <div  >
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login"
        />
      </div>
      <form className="relative flex flex-col justify-center items-center h-screen">
        <input type="text" placeholder="Email Address" className="p-2 m-2" />
        <input type="password" placeholder="Password" className="p-2 m-2" />
        <button className="p-4 m-4">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
