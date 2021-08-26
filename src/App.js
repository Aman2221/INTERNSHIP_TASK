import Nav from './Components/Nav';
import './CSS/App.css';
import React, {useState} from 'react';
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
      */}
    </div>
  );
}

export default App;
