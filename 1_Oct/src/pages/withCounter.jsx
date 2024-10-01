import { useState } from "react";

const withCounter = (OldComponent, incrementBy = 1) => {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    return (
      <OldComponent
        {...props}
        count={count}
        increment={() => setCount(count + incrementBy)}
        withName="HOC 2"
      />
    );
  };
};

export default withCounter;

// Benefits
//Code sharing, state management, conditional rendering, styled Components
