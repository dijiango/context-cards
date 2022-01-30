import Topbar from "./components/bars/Topbar";
import Review from './components/pages/review/Review';
import Create from './components/pages/create/Create';
import Home from './components/pages/home/Home';
import LandingPage from "./components/pages/landing/Landing";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useEffect } from "react";

function App() {

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch ("/me")
  //   .then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // if (user) {
  //   return <h2>Welcome back, {user.username}</h2>
  // } else {
  //   return <Login onLogin = {setUser} />
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path='/review' element={ <Review /> } />
          <Route path='/create' element={ <Create /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/' element={ <LandingPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
