import Nav from './Components/Nav';
import './CSS/App.css';
import React, {useState} from 'react';
//import Task2 from './Components/TASK2/Task2';

function App() {

  //const [removeSideClass, setRemoveSideClass] = useState();
  
  return (
    <div className="App">
      <Nav />
      {/*
       <div className={ removeSideClass ? "setWidth100" : "sidebarAndRightDiv"}>
          <Sidebar />
          <MainDiv />
       </div>
      <<Task2 />
      */}
    
    </div>
  );
}

export default App;
