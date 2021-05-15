import {Route, Switch} from 'react-router-dom'
import Profile from './Components/auth/Profile';
import ForgotPass from './Components/auth/ForgotPass';
import PrivateRoute from './Components/auth/PrivateRoute';
import SignIn from "./Components/auth/SignIn";
import SignUp from './Components/auth/SignUp';
import UpdateProfile from './Components/auth/UpdateProfile';
import {AuthProvider} from './Contexts/AuthContext'
import Header from './Components/Header';

function App() {

  return (
    <>
    <AuthProvider>
       <Header />
        <Switch >
        <PrivateRoute exact path="/profile" component={Profile} />
         <Route exact path="/login">
            <SignIn/>
         </Route>
         <Route exact path="/register">
            <SignUp />
         </Route>
         <Route exact path="/resetPassword">
            <ForgotPass />
         </Route>
         <Route exact path="/updateProfile">
            <UpdateProfile/>
         </Route>
      </Switch>
    </AuthProvider>
    </>
  );
}

export default App;
