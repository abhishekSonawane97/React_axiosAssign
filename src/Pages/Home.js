import React from 'react'
import Listing from '../Components/Listing'

const Home = () => {

  


  return (
    <div className='container my-4'>
      
      <div className="card text-center my-4 mx-4">
  <div className="card-header" style={{backgroundColor:"#042743", color:"white"}}>
    <h1 className="card-header">Digikull Students</h1>
  </div>
    <Listing />
</div>

    </div>
  )
}

export default Home
