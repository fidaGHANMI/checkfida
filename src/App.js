import './App.css';
import Adress from "./components/profile/Adress"
import ProfilePhoto from "./components/profile/ProfilePhoto"
import FullName from "./components/profile/FullName"


function App() {
  return (
    <div className="App">
      
      <FullName/>
      <Adress/>
       <ProfilePhoto/>

    </div>
  );
}

export default App;
