import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Admin from './Pages/Admin/Admin'; 

//App Component
const App = () => {
  
  return (
    <div>
      {/* Mounting Navbar and Admin */}
      <Navbar/>
      <Admin/>
    </div>
  )
}

export default App;