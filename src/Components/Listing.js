import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Listing = (props) => {

  const [state, setState] = useState([])

  const [user, setUser] = useState('')

  const handleChange = (e)=>{
    setUser(e.target.value)

  }

  const addItem = ()=>{

    axios.post('https://jsonplaceholder.typicode.com/users', user).then((res)=>{
      // console.log(res.data)
      // setUser('')
      setUser(res.data)
  
  }).catch((err)=>{
    console.log(err);
  })
  }

  const handleClick = ()=>{

    addItem();
    setState([...state,user])
    console.log(state);
    setUser('')
  
  }

  const callApi = () =>{


    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
      // console.log(res.data)
    setState(res.data)
  
  }).catch((err)=>{
    console.log(err);
  })

    

  

}
    useEffect(()=>{

        callApi()

    },[])

    



  
  return (
    <div>

<div className="card-body">
    <h5 className="card-title">Hello User</h5>
    <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Enter Name" aria-label="Recipient's username" aria-describedby="button-addon2" value={user} onChange={handleChange}/>
  <button className="btn btn-outline-primary"  onClick={handleClick} >Add</button>
</div>


  </div>
      
      <div className="list-group">
    <p className="card-text">Student List.</p>
    {state.map((ele)=>

    <li className="list-group-item list-group-item-primary my-1 mx-2" key={ele.id} > {ele.name} </li>

    )}
    </div>

    </div>
  )
}

export default Listing
