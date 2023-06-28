import React from "react";

import "./TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input 
      className="TodoSearch" 
      type="text" 
      placeholder="Buscar tareas"
      value={searchValue}
      onChange={
        e=>{
          setSearchValue(e.target.value);
        }
      }
    />
  );
}

export { TodoSearch };