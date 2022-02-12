import './App.css';
import Header from "./components/Header/header";
import Nav from "./components/NavLink/nav";
import Dialogs from "./components/Dialogs/dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Profile from "./components/Profile/Profile";
import {addPosts, RootStateType} from "./redux/state";





const App = (props:IntrinsicAttributes & RootStateType) => {
  return (
      <BrowserRouter>
        <div className='App-wrapper'>
          <Header/>
          <Nav/>
          <div className='App-wrapper-content'>
            <Routes>
              <Route path='/profile'
                     element={<Profile profilePage={props.profilePage} addPosts={addPosts}
                                       /*updateNewPostText={props.updateNewPostText}*//>}/>
              <Route path='/dialogs' element={<Dialogs dialogs={props.messagesPage}
                                                       messages={props.messagesPage}
                                                       /*addMessage={props.addMessage}*//>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/music' element={<Music/>}/>
              <Route path='/settings' element={<Settings/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
