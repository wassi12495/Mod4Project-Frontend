
import React from 'react'



const SearchTeams = ({search, handleChange}) =>{
  return(

    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search Teams"}
        onChange={handleChange}
        value={search}
      />
    </div>
  )

}

export default SearchTeams
