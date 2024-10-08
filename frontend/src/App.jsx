import { useState } from 'react'
import { BrowserRouter,Navigate,Routes,Route } from 'react-router-dom'
import HomePage from './scenes/homepage'
import ProfilePage from './scenes/profilepage'
import LoginPage from './scenes/loginpage'
import { useSelector } from 'react-redux'
import { CssBaseline,ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'
import { useMemo } from 'react'

function App() {
 
const mode=useSelector((state)=>state.mode);
const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode]);
const isAuth=Boolean(useSelector((state)=>state.token));
  return (
  
      <div className='app'>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
        <Routes>
          <Route path='/' element={<LoginPage/>} />
          <Route path='/profile/:userId' element={isAuth?<ProfilePage />:<Navigate to="/"/>} />
          <Route path='/home' element={isAuth?<HomePage />:<Navigate to ="/"/>} />
        </Routes>
        </ThemeProvider>
        </BrowserRouter>
        
      </div>
  
  )
}

export default App
