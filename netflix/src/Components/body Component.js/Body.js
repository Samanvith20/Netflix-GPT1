import { createBrowserRouter } from "react-router-dom";

import Login from "../login Component/Login";
import { RouterProvider } from "react-router-dom";
import Browser from "../browse Component/Browser";


const Body = () => {
 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browser />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;