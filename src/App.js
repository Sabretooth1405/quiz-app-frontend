import './App.css';
import Header from './components/header';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/loginPage';
import Home from './components/home';
import PrivateRoutes from './utils/PrivateRoutes';
function App() {
  const theme = createTheme()
  // const [isLoggedIn, setIsloggedIn] = useState(false)
  
  
  

  // const isLoggedInHandler = (flag) => {
  //   if (flag) {
  //     setIsloggedIn(true);
  //   }
  //   else {
  //     setIsloggedIn(false)
  //   }
  // }
  // async function testLogin() {
  //   const token = localStorage.getItem('myToken')
  //   let res = await fetch('http://localhost:8000/api/login-test/',
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": `Token ${token}`
  //       },
  //     })
   
  //   if (res.ok) {
  //     res = await res.json()
     
  //     isLoggedInHandler(true)
  //     usernameHandler(res.username)
  //   }
  // }
  // useEffect(() => {
  //   testLogin()
  //   loadingHandler()
  //   console.log(loading)
  // },[])

  

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Home />} path="/home"  />
            </Route>
            <Route path="/login" element={<LoginPage />} />
           
          </Routes>

        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
