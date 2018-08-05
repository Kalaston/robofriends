import React from "react";

const SearchBox = props => {
  return (
    <div className="pa2">
      <input
        type="text"
        placeholder="Search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={props.onChange}
      />
    </div>
  );
};

export default SearchBox;
