import React , { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLoc = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className="App">
      <div className="container">
          <div className="search">
            <input type="text" value={location} 
                  placeholder="Enter Location Here..." 
                  onChange={event => setLocation(event.target.value)}
                  onKeyPress={searchLoc}>
            </input>
          </div>
          <div className="location">
            <h3>{data.name}</h3>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>Description: {data.weather[0].description} </p> : null}
          </div>
      </div>
    </div>
  );
}

export default App;
