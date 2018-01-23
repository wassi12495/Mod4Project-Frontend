
import React from 'react'



const SearchTeams = ({search, handleChange}) =>{
  return(
    <div className="ui segment"> 
      <div className="ui huge fluid icon input">
        <input
          type="text"
          placeholder={"Search Teams"}
          onChange={handleChange}
          value={search}
        />
      </div>
    </div>
  )

}

export default SearchTeams
