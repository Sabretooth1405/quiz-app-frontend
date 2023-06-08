import './App.css';
import Header from './components/header';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/loginPage';
import SignUpPage from './components/signUpPage';
import Home from './components/home';
import PrivateRoutes from './utils/PrivateRoutes';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from './context/AuthContext'
import ResponsiveAppBar from './components/responiveAppBar';
import QuestionsPage from './components/questionsPage';
import MyQuestionsPage from './components/myQuestionsPage';
import EditQuestionPage from './components/editQuestionPage';
import CreateQuestionsPage from './components/createQuestionsPage';
import MyAnswersPage from './components/myAnswersPage';
import CorrectAnswersPage from './components/correctAnswerPage';
import FriendsPage from './components/friendsPage';

const queryClient = new QueryClient();
function App() {
  const theme = createTheme()
  

  

  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
          <ResponsiveAppBar/>
          {/* <Header/> */}
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Home />} path="/"  />
              <Route element={<QuestionsPage />} path="/questions"  />
              <Route element={<CreateQuestionsPage />} path="/questions/create"  />
              <Route element={<MyQuestionsPage />} path="/myquestions"  />
              <Route element={<EditQuestionPage />} path="/myquestions/:user/:id"  />
              <Route element={<MyAnswersPage />} path="/myanswers"  />
              <Route element={<CorrectAnswersPage />} path="/answers/:id"  />
              <Route element={<FriendsPage />} path="/friends"  />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUpPage />} />
          </Routes>
          </AuthProvider>
        </ThemeProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
