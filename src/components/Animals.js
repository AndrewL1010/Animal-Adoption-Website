import React, { useState, useRef, useEffect, useContext } from "react";
import Animal from './Animal'
import { Context } from "../contexts/Context";
const Animals = (props) => {
  // we pass in FILTER_MAP and filter from home to filter out the animals in this component instead
  const { animals, isLoading, FILTER_MAP, filter } = props;

  if (!animals || animals.length === 0) {
    return <p>No Animals are here.</p>;
  }




  return (
    <div className="container">

      {!isLoading && animals.
      filter(FILTER_MAP[filter])
      .map(a => {
        return (
          <Animal key={a.name} a={a} />
        );
      })
      }
    </div>
  );
};
export default Animals;