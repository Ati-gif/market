import React from "react";

const Store = (props) =>  {

    const { id, name, price, items,} = props.store;
    return (
      <>
        <h1>Store Information</h1>
        <h3>{name}</h3>
        <p>
          Hours: {"8AM-9PM"}
          </p>
          <p>
          Location: {"SLC,UT"}
        </p>
        <a href="/">back</a>
      </>
    );
  
}

export default Store