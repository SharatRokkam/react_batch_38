import { useState } from "react";

const AgeValidation = () => {
  const [validAge, setValidAge] = useState(true);

  //1. If Else
  //   if (validAge) {
  //     return <div>You can vote</div>;
  //   } else {
  //     return <div>You cannot vote</div>;
  //   }

  //   2. Element Variable
  //   let age;
  //   if (validAge) {
  //     age = <div>You can vote!!!</div>;
  //   } else {
  //     age = <div>You cannot vote!!</div>;
  //   }

  //   return <>{age}</>;

  //   3. Ternary Operator
  //   return (
  //     <>{validAge ? <div>You can vote!!</div> : <div>You cannot vote</div>}</>
  //   );

  // 4. Short Circuit - AND Operator
  return <>{validAge && <h2>You can vote!!</h2>}</>;
};

export default AgeValidation;
