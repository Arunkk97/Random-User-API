import { Button, Card } from 'react-bootstrap'
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'







function App() {
  const [rUser, setRUser] = useState("")
  const [bgcolor, setBgcolor] = useState('#ffffff')



  const randomUser = async () => {
    console.log('inside random user');
    try {
      const response = await axios.get("https://dummyjson.com/users")
      const result = response.data.users
      const random = result[Math.floor(Math.random() * result.length)]
      setRUser(random);
      console.log(rUser);

    } catch (err) {
      console.log(err);
    }
  
  }

  const randomColor =()=> { return '#' + Math.floor(Math.random() * 16777215).toString(16)}

  const handleRefresh=()=>{
   
    randomUser()
    setBgcolor(randomColor())
    console.log(bgcolor);
   
  }
  

  useEffect(()=>{
    randomUser()
    setBgcolor(randomColor())
  },[])





  return (
    <>
      <div className='container d-flex justify-content-center align-items-center mt-3'>

        <Card style={{ width: '40rem', height: '100vh',backgroundColor:bgcolor }} >
          <Card.Body>
            <Card.Title style={{ fontSize: '20px' }} className='text-center py-3 fw-bolder mb-1'>Random User</Card.Title>
            <Card.Img className='w-25' variant="top" src={rUser.image} />
            <Card.Text className='text-center'>
              <h5 className='py-2'>{`Name :${rUser.firstName} ${rUser.lastName}`}</h5>
              {/* <h5 className='py-2'>{`Address :${rUser.address.address} `}</h5> */}
              <h5 className='py-2'>{`Age :${rUser.age} `}</h5>
              <h5 className='py-2'>{`Gender :${rUser.gender} `}</h5>
              <h5 className='py-2'>{`Email  :${rUser.email} `}</h5>

              <h5 className='py-2'>{`Bith Date :${rUser.birthDate} `}</h5>
            </Card.Text>
            <div className='text-center'>
              <Button onClick={handleRefresh} variant="primary">Refresh</Button>
            </div>
          </Card.Body>
        </Card>


      </div>

    </>
  )
}

export default App
