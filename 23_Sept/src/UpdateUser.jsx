import React from "react";
// import { useContext } from "react";
import { UserContext } from "./UserProvider";

const UpdateUser = () => {
  //   const { user, setUser } = useContext(UserContext);

  //   const handleChange = () => {

  //   };

  return (
    <>
      <UserContext.Consumer>
        {({ user, setUser }) => (
          <div>
            <button onClick={() => setUser({ ...user, name: "Jane" })}>
              Button to Change Name
            </button>
          </div>
        )}
      </UserContext.Consumer>
    </>
  );
};

export default UpdateUser;
