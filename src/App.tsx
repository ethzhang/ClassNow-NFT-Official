import Navigation from './components/Navigation'
import Footer from './components/Footer';
import Main from './components/sections/Main';
import Meet from './components/sections/Meet';
import Story from './components/sections/Story';
import Roadmap from './components/sections/Roadmap';
import Team from './components/sections/Team';

// import { ThemeProvider } from 'styled-components';


function App() {
  return (
     <>
      <div className="app">
        <Navigation />
        <Main />
        <Meet />
        <Story />
        <Roadmap />
        <Team />
        <Footer />
      </div>
     
     </>
  );
}

export default App;
