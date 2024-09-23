import React from "react";
import { UserProvider } from "./UserProvider";
import UpdateUser from "./UpdateUser";
import UserProfile from "./UserProfile";
import './App.css'

const App = () => {
  return (
    <>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>
    </>
  );
};

export default App;
