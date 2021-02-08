import SimpleBottomNavigation from './components/footer/Footer'
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
        {/* <footer>
          <SimpleBottomNavigation/>
        </footer> */}
      </div>    
  );
}


export default App;
