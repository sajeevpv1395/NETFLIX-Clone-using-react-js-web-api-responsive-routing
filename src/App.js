import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import {action,Originals,HorrorMovies,RomanceMovies,ComedyMovies} from './url'
import "./App.css";
import RowPost from "./components/RowPost/RowPost";
function App() {
  

  return (
    <div className="App">
      
      <NavBar/>
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals'/>
      <RowPost  url={action} title='Action' isSmall />
      <RowPost  url={ComedyMovies} title='ComedyMovies' isSmall />
      <RowPost  url={HorrorMovies} title='HorrorMovies' isSmall />
      <RowPost  url={RomanceMovies} title='RomanceMovies' isSmall />
    </div>
  );
}
export default App;
