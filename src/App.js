import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import SocialLinks from  './components/SocialLinks';

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <SocialLinks />
      </main>
    </ChakraProvider>
  );
}

export default App;
