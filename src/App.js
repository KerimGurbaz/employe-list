
import './App.css';
import Header from './components/Header/Header';
import data from './assest/data'
import Button from './components/Button/Button';
import Main from './components/Main/Main';
import {useState} from 'react';
import React from 'react';

function App() {
  const [page, setPage] = useState(1)
  const userPerPage = 5;  // 5 images per page

  const indexOfLastUser = page * userPerPage;
  const indexOffFirstUser = indexOfLastUser - userPerPage;
   
  const currentUsers = data.slice(indexOffFirstUser,indexOfLastUser);





  return (
    <div className="App">
      <Header from={indexOffFirstUser + 1} to={indexOffFirstUser + currentUsers.length}/>
     {currentUsers.map((item)=> <Main key={item.id} {...item}/>)}
      <Button total ={Math.ceil(data.length / userPerPage)} page={page} setPage={setPage} />
    </div>
  );
}

export default App;
