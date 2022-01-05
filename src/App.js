import React, {useEffect,useState} from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


const API_ALL = "http://hp-api.herokuapp.com/api/characters"
const API_STUD = "http://hp-api.herokuapp.com/api/characters/students"
const API_STAFF = "http://hp-api.herokuapp.com/api/characters/staff"
const API_HOUSE_GRY = "http://hp-api.herokuapp.com/api/characters/house/gryffindor"
const API_HOUSE_HUF = "http://hp-api.herokuapp.com/api/characters/house/hufflepuff"
const API_HOUSE_RAV = "http://hp-api.herokuapp.com/api/characters/house/ravenclaw"
const API_HOUSE_SLI = "http://hp-api.herokuapp.com/api/characters/house/slytherin"

function App() {
  const [characters, setChar] = useState([])

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
      <Button size="lg" variant="dark" onClick={fetchAll}>All characters</Button>
      <Button size="lg" variant="dark" onClick={fetchStudents}>Hogwarts students</Button>
      <Button size="lg" variant="dark" onClick={fetchStaff}>Hogwarts staff</Button>

      <ButtonGroup>
        <DropdownButton size="lg" variant="dark" as={ButtonGroup} title="Characters in a certain house" id="bg-nested-dropdown">
          <ButtonGroup  vertical>
            <Button size="lg" variant="dark" onClick={fetchHouseGRY}>Gryffindor</Button>
            <Button size="lg" variant="dark" onClick={fetchHouseHUF}>Hufflepuff</Button>
            <Button size="lg" variant="dark" onClick={fetchHouseRAV}>Ravenclaw</Button>
            <Button size="lg" variant="dark" onClick={fetchHouseSLI}>Slytherin</Button>
          </ButtonGroup>
        </DropdownButton>
      </ButtonGroup>

      
      <div className = "charList">
        {characters.map((char) => (
         <div className = "charItem"> 
            <h1>{char.name}</h1>
            <img src={char.image} width={300} height={400} alt="none image" />
            <p><b>Actor:</b> {char.actor}</p>
            <p><b>Ancestry:</b> {char.ancestry}</p>
            <p><b>Date of Birth:</b> {char.dateOfBirth}</p>
            <p><b>House:</b> {char.house}</p>
            <p><b>Patronus:</b> {char.patronus}</p>
            <p><b>Wand:</b> {char.wand.core}, {char.wand.wood}</p>
         </div> 
        ))}
      </div>

      <footer><Footer /></footer>
      <link href="http://fonts.cdnfonts.com/css/harry-potter" rel="stylesheet"></link>
    </div>
  );
}

export default App;
