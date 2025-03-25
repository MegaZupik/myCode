import './App.css';
import React, {Component} from 'react';
import Navbar from "./components/Nav/nav.jsx";
import Adds from "./components/Adds/adds.js";
import {BrowserRouter, Routes, Route, useLocation, useNavigate, useParams,} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Preloader from "./components/common/preloader/preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import SideBarContainer from "./components/SideBar/SideBarContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer.ts";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}






class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
        /*<BrowserRouter>*/
            <div className="wrapper">
                <HeaderContainer message="Privet World!!!"/>
                <Navbar/>
                <div className="app-content">
                    <Routes>

                        <Route path='/Profile' element={<ProfileContainer />} />
                        <Route path='/Profile/:profileId' element={<ProfileContainer />} />
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path='/users' element={<UsersContainer /> }/>
                        <Route path='/Preloader' element={<Preloader /> }/>
                        <Route path='/login' element={  <LoginPage /> }/>
                    </Routes>
                </div>
                <Adds/>

            </div>
        /*</BrowserRouter>*/
    );
}}


    const mapStateToProps = (state) => ({
        initialized: state.app.initialized
    })

    export default compose(
        withRouter,
        connect(mapStateToProps, {initializeApp}))(App);
