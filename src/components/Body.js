import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(()=> {
    // On AUTH Change
    //todo
  }, [])
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
