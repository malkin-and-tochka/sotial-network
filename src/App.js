import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './components/navbar/navbar'
import HeaderContainer from './components/header/headerContainer';
import Login from './components/login/login';
import {connect, Provider} from 'react-redux';
import {initializeApp} from './redux/auth-reduce';
import Preloader from './common/Preloader';
import store from "./redux/redux-store";
const ProfileContainer = React.lazy(() => import('./components/profile/profileContainer'));
const DialogsContainer = React.lazy(() => import('./components/dialogs/dialogsContainer'));
const FriendsContainer = React.lazy(() => import('./components/friends/friendContainer'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='site-wrapper'>
                    <HeaderContainer/>
                    <Nav/>
                    <div className='site-wrapper-content'>
                        <React.Suspense fallback={<Preloader/>}>
                            <Routes>
                                <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                                <Route path='/profile' element={<ProfileContainer/>}/>
                                <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                                <Route path='/friends/*' element={<FriendsContainer/>}/>
                                <Route path='/login/*' element={<Login/>}/>
                            </Routes>
                        </React.Suspense>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.authDataWrapper.initialized
})
let AppContainer = connect(mapStateToProps, {initializeApp})(App)

const MainApp = () => {
  return(
      <React.StrictMode>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </React.StrictMode>
      )
}
export default MainApp