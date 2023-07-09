import{ BrowserRouter, Navigate, Routes, Route}from 'reac-router-dom';
import HomePage from 'scenes/homePage';
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';


function App() {

    return (
    <div className="app">app
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/profile/:userid" element={<ProfilePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
