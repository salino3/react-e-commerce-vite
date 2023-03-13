import { MyProvider } from './core';
import {BrowserRouter} from 'react-router-dom';
import { AppRouter } from './router';
import { Header } from './components';
import './App.scss';

function App() {

  return (
    <MyProvider>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </MyProvider>
  );
}

export default App
