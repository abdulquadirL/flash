
import './App.css'
//import { Text } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/authPage' element={<AuthPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
