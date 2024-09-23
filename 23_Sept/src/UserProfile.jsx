import React from "react";
//hook
// import { useContext } from "react";
import { UserContext } from "./UserProvider";

const UserProfile = () => {
  //   const { user } = useContext(UserContext);

  return (
    <>
      <UserContext.Consumer>
        {({ user }) => (
          <div>
            <h1>User Profile</h1>
            <h3>Name : {user.name}</h3>
            <p>Age : {user.age}</p>
          </div>
        )}
      </UserContext.Consumer>
    </>
  );
};

export default UserProfile;
