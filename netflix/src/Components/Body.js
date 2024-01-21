import { createBrowserRouter } from "react-router-dom";

import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import Browser from "./Browser";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { addUser, removeuser } from "../utils/userSlice";

const Body = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {email,password, displayName}=user
        const uid = user.uid;
         dispatch(addUser({
          email:email,
          password:password,
          uid:uid,
          displayName:displayName
         }))
      } else {
        // User is signed out
         dispatch(removeuser())
      }
    });
  },[])
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