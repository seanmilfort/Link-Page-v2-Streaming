import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import SocialLinks from  './components/SocialLinks';
import SocialButtons from './components/SocialButtons';

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <SocialLinks />
        <SocialButtons />
      </main>
    </ChakraProvider>
  );
}

export default App;
