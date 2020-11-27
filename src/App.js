import IndexAboutCompany from './components/indexAboutCompany'
import React from 'react';
import NavBar from './components/Header/NavBar'
import Main from './router/Main'
import Container from '@material-ui/core/Container';
import './App.css';

function App() {
  return (
      <div>
         <header>
            <NavBar/>
        </header>
      <Container>
        <Main/> 
        </Container>
      <footer>

      </footer>
      </div>    
  );
}


export default App;
