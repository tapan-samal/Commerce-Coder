import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchClient } from "../../features/clientDetailSlice";

const Menubar = () => {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchClient(searchName));
  }, [searchName]);

  return (
    <div className="menubar">
      <div>
        <h2>Client Lists</h2>
      </div>
      <div className="search_bar">
        <input
          type="search"
          placeholder="Search Name..."
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Menubar;
