import React from 'react'
import {useSelector} from 'react-redux'
const Displaye = () => {
    const displaye=useSelector((state)=>state.addProduct)
    console.log("Displaye data")
    console.log(displaye)
  return (
    <>
    <h2>Hello</h2>
      <h1>{displaye.length}</h1>
    </>
  )
}

export default Displaye