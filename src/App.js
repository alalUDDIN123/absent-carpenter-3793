import logo from './logo.svg';
import './App.css';
import Admin from './Pages/AdminPage/Admin';
import SignUp from './Pages/Authentication/SignUp';
import Home from './Pages/LandingPage/Home';
import Products from './Pages/Products/Products';
import Single from './Pages/SinglePage/Single';

function App() {
  return (
    <div className="App">
      <Admin />
      <SignUp />
      <Home />
      <Products />
      <Single />
    </div>
  );
}

export default App;
