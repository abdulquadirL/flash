
import './App.css'
//import { Text } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import PageLayout from './Layouts/PageLayouts/PageLayout';

function App() {

  return (
    <PageLayout>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/authPage' element={<AuthPage/>}></Route>
    </Routes>
    </PageLayout>
  )
}

export default App
