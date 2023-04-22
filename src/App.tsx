import { MyProvider } from './core';
import {BrowserRouter} from 'react-router-dom';
import { AppRouter } from './router';
import { Footer, Header } from './components';
import './App.scss';

function App() {

  return (
    <MyProvider>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </MyProvider>
  );
}

export default App
