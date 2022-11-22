import React,{useState} from 'react';

import './App.css';

import Header from './components/Header';
import SearchbarSection from './components/SearchbarSection';

function App() {

  const [darkmood,setDarkmood] = useState(false) ;
  return (
    <div>
      <Header/>
      <SearchbarSection/>
    </div>
  );
}

export default App;
