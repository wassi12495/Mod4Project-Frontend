import React from 'react'
import FixtureCard from './FixtureCard'

const FixtureList = (props) =>{
  const fixture = props.fixtures.map((fx,index) => <FixtureCard fx={fx} key={index}/>)

  return(
    <div>{fixture.reverse()}</div>
  )

}

export default FixtureList
