
import './App.css';
import Automation from './Components/Automation';
import Broadcast from './Components/Broadcast';
import Contacts from './Components/Contacts';
import Header from './Components/Header';
import Inbox from './Components/Inbox';
import {Routes,Route} from 'react-router-dom'




function App() {
  
  return (
    <>
  <Header/>
    
      <Routes>
        <Route path='/' element={<Inbox/>}></Route>
        <Route path='/contacts' element={<Contacts/>}></Route>
        <Route path='/broadcast' element={<Broadcast/>}></Route>
        <Route path='/automation' element={<Automation/>}></Route>

      </Routes>
    
      
    </>
  );
}

export default App;
