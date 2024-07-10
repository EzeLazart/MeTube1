import { useState } from 'react'
import './App.css'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
        
      <p className="">
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id earum perferendis ab cupiditate fugiat. Pariatur beatae nisi, ab accusantium consequuntur, ullam expedita possimus, quisquam veritatis doloribus eum sit id velit.</h1>
        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque sunt consectetur ut, neque sed quis, est quibusdam mollitia incidunt quo atque architecto error. Illo minus aspernatur quisquam doloremque cum sed!</h3>
        <button variant= "primary">Aceptar</button>
      </p>
      </div>
      
      
    </>
  )
}

export default App

