import React from "react";

import "./TodoSearch.css";

function TodoSearch() {
  
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue)
  
  return (
    <input 
      className="TodoSearch" 
      type="text" 
      placeholder="Buscar tareas"
      onChange={
        e=>{
          setSearchValue(e.target.value);
        }
      }
      value={searchValue}
    />
  );
}

export { TodoSearch };