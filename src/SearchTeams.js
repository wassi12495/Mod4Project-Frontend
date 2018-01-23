
import React from 'react'



const SearchTeams = ({handleChange}) =>{
  return(

    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search Teams"}
        onChange={handleChange}
      />
    </div>
  )

}

export default SearchTeams
