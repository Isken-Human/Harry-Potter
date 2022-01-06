import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form'



const API_ALL = "http://hp-api.herokuapp.com/api/characters"
const API_STUD = "http://hp-api.herokuapp.com/api/characters/students"
const API_STAFF = "http://hp-api.herokuapp.com/api/characters/staff"
const API_HOUSE_GRY = "http://hp-api.herokuapp.com/api/characters/house/gryffindor"
const API_HOUSE_HUF = "http://hp-api.herokuapp.com/api/characters/house/hufflepuff"
const API_HOUSE_RAV = "http://hp-api.herokuapp.com/api/characters/house/ravenclaw"
const API_HOUSE_SLI = "http://hp-api.herokuapp.com/api/characters/house/slytherin"

function App() {
  const [characters, setChar] = useState([])
  const [name, setName] = useState([""])
  const [image, setImage] = useState([""])
  const [actor, setActor] = useState([""])
  const [ancestry, setAncestry] = useState([""])
  const [date, setDate] = useState([""])
  const [house, setHouse] = useState([""])
  const [patronus, setPatronus] = useState([""])
  const [wand, setWand] = useState([""])

  const [data, setData] = useState([])

  const getData = () => {
    fetch('https://harry-potter-9710c-default-rtdb.firebaseio.com/harry-potter-list.json')
    .then((res) => res.json()
    .then((data) => {
      console.log(data)
      const chars = []
      for(const key in data){
        console.log(data[key])
        chars.push(data[key])
        console.log("Chars array", chars)
      }
      setData(chars)
    }) )
  }

  const sendData = () => {
    const char = {
      name: name,
      image: image,
      actor: actor,
      ancestry: ancestry,
      date: date,
      house: house,
      patronus: patronus,
      wand: wand
    }
    console.log(char)

    fetch('https://harry-potter-9710c-default-rtdb.firebaseio.com/harry-potter-list.json', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(char),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }


  const fetchAll = () => {
    console.log("Button is clicked!");
    fetch(API_ALL)
    .then((response) => {return response.json()})
    .then((data) => console.log(data));

    fetch(API_ALL)
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }
  const fetchStudents = () => {
    console.log("Button is clicked!");
    fetch(API_STUD)
    .then((response) => {return response.json()})
    .then((data) => console.log(data));

    fetch(API_STUD)
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }
  const fetchStaff = () => {
    console.log("Button is clicked!");
    fetch(API_STAFF)
    .then((response) => {return response.json()})
    .then((data) => console.log(data));

    fetch(API_STAFF)
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }
 
  const fetchHouseGRY = () => {
    console.log("Button is clicked!");
    fetch(API_HOUSE_GRY)
    .then((response) => {return response.json()})
    .then((data) => console.log(data));

    fetch(API_HOUSE_GRY)
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }
  const fetchHouseHUF = () => {
    console.log("Button is clicked!");
    fetch(API_HOUSE_HUF)
    .then((response) => {return response.json()})
    .then((data) => console.log(data));

    fetch(API_HOUSE_HUF)
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }
  const fetchHouseRAV = () => {
    console.log("Button is clicked!");
    fetch(API_HOUSE_RAV)
    .then((response) => {return response.json()})
    .then((data) => console.log(data));

    fetch(API_HOUSE_RAV)
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }
  const fetchHouseSLI = () => {
    console.log("Button is clicked!");
    fetch(API_HOUSE_SLI)
    .then((response) => {return response.json()})
    .then((data) => console.log(data));

    fetch(API_HOUSE_SLI)
    .then((response) => {return response.json()})
    .then((data) => {setChar(data)});
  }


  return (
    <div className="App">
      <Header />
      <Stack className="btn-toolbar justify-content-md-center mt-3 p-3" direction="horizontal" gap={3}>
        <Button size="lg" variant="dark" onClick={fetchAll}>All characters</Button>
        <Button size="lg" variant="dark" onClick={fetchStudents}>Hogwarts students</Button>
        <Button size="lg" variant="dark" onClick={fetchStaff}>Hogwarts staff</Button>
        <Dropdown>
          <Dropdown.Toggle  size="lg"  id="dropdown-button-dark-example1" variant="dark">
            Characters in a certain house
          </Dropdown.Toggle>
          <Dropdown.Menu variant="dark" align={{ lg: 'end' }}>
            <Dropdown.Item size="lg" variant="dark" onClick={fetchHouseGRY} active>Gryffindor</Dropdown.Item>
            <Dropdown.Item size="lg" variant="dark" onClick={fetchHouseHUF}>Hufflepuff</Dropdown.Item>
            <Dropdown.Item size="lg" variant="dark" onClick={fetchHouseRAV}>Ravenclaw</Dropdown.Item>
            <Dropdown.Item size="lg" variant="dark" onClick={fetchHouseSLI}>Slytherin</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Stack>
      <div className="form">
        <p className='database text-center'>You can add a new character to our database</p>
        <label>Name:</label>
        <input type="text" onChange={(e) => {setName(e.target.value)}} />

        <label>Actor:</label>
        <input type="text" onChange={(e) => {setActor(e.target.value)}} />

        <label>Ancestry:</label>
        <input type="text" onChange={(e) => {setAncestry(e.target.value)}} />

        <label>Date of Birth:</label>
        <input type="text" onChange={(e) => {setDate(e.target.value)}} />

        <label>House:</label>
        <input type="text" onChange={(e) => {setHouse(e.target.value)}} />
        
        <label>Patronus:</label>
        <input type="text" onChange={(e) => {setPatronus(e.target.value)}} />
        

        <label>Wand:</label>
        <input type="text" onChange={(e) => {setWand(e.target.value)}} />

        <Form.Group controlId="formFile" className="m-3">
           <Form.Label className="row align-items-center justify-content-center">Choose an image</Form.Label>
           <Form.Control  onChange={(e) => {setImage(e.target.value)}} type="file" />
        </Form.Group>
        

        <Button className="mt-3" size="lg" variant="dark" onClick={sendData}>Add character</Button>
        <Button className="mt-3" variant="dark" size="lg" onClick={getData}>Show added characters</Button>
      </div>

      <div className = "charList row align-items-center justify-content-center container-fluid">
        {data.map(item => (
          <div className = "charItem text-center col-md-5 align-items-center justify-content-center">
            <h1>{item.name}</h1>
            <img className="Images" src={item.image} width={300} height={400} />
            <p><b>Actor:</b> {item.actor}</p>
            <p><b>Ancestry:</b> {item.ancestry}</p>
            <p><b>Date of Birth:</b> {item.date}</p>
            <p><b>House:</b> {item.house}</p>
            <p><b>Patronus:</b> {item.patronus}</p>
            <p><b>Wand:</b> {item.wand}</p>
          </div>
        ))}
        
      </div>
      
      <div className = "charList row align-items-center justify-content-center container-fluid">
        {characters.map((char) => (
         <div className = "charItem text-center col-md-5 justify-content-center"> 
            <h1>{char.name}</h1>
            <img className="Images" src={char.image} width={300} height={400} alt="none image" />
            <p><b>Actor:</b> {char.actor}</p>
            <p><b>Ancestry:</b> {char.ancestry}</p>
            <p><b>Date of Birth:</b> {char.dateOfBirth}</p>
            <p><b>House:</b> {char.house}</p>
            <p><b>Patronus:</b> {char.patronus}</p>
            <p><b>Wand:</b> {char.wand.core}, {char.wand.wood}</p>
         </div> 
        ))}
      </div>
          
      

      <footer ><Footer /></footer>

      <link href="http://fonts.cdnfonts.com/css/harry-potter" rel="stylesheet"></link>
    </div>
  );
}

export default App;
