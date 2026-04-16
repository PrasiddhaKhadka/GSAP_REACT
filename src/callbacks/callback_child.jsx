import React from "react";

export const ChildComponent = React.memo(({ onClick }) => {
      console.log('Child component rendered');
      return <button onClick={onClick} className="bg-amber-300 p-3 rounded-2xl">Click me</button>;
    });