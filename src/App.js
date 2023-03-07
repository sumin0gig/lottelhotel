import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Example from './components/pages/Example';
import JoinPage from './components/pages/JoinPage';
import Main from './components/pages/Main';
import EditPassword from './components/pages/member/EditPassword';
import IdFind from './components/pages/member/IdFind';
import Login from './components/pages/member/Login';
import PassFind from './components/pages/member/PassFind';
import Reservation from './components/pages/Reservation';
import WriteEvent from './components/pages/WriteEvent';
import WriteRoom from './components/pages/WriteRoom';
import RoomContainer from './containers/RoomContainer';
import RoomDetailContainer from './containers/RoomDetailContainer';
import SpDetailcontainer from './containers/SpDetailcontainer';
import Specialcontainer from './containers/Specialcontainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/special/" element={<Specialcontainer isMain={false} limits={10}/>}/>
        <Route path="/special/:no" element={<SpDetailcontainer />}/>
        <Route path="/join" element={<JoinPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/findid" element={<IdFind/>}/>
        <Route path="/findpass" element={<PassFind/>}/>
        <Route path="/updatePassword" element={<EditPassword/>}/>
        <Route path="/writeevent" element={<WriteEvent/>}/>
        <Route path="/writeroom" element={<WriteRoom/>}/>
        <Route path="/room" element={<RoomContainer/>}/>
        <Route path="/roomdetail/:no" element={<RoomDetailContainer/>}/>
        <Route path="/test" element={<Example/>}/>
        <Route path="/reservation/*" element={<Reservation/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
