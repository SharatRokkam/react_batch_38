const withName = (OldComponent) => {
  return function EnhancedComponent(props) {
    return <OldComponent {...props} withName="HOC" />;
  };
};

export default withName;

// Benefits
//Code sharing, state management, conditional rendering, styled Components


//Alternative 
// Custom Hooks, RenderProps, Context API
