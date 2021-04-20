import logo from './logo.svg';
import './App.css';
import adress from "./components/profile/Adress"
import profilePhoto from "./components/profile/ProfilePhoto"
import FullName from "./components/profile/FullName"


function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}

export default App;
