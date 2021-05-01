import {Route, Switch} from 'react-router-dom'
import SignIn from "./Components/SignIn";
import SignUp from './Components/SignUp';
import {AuthProvider} from './Contexts/AuthContext'

function App() {

  return (
    <>
    <AuthProvider>
        <Switch >
         <Route exact path="/login">
            <SignIn/>
         </Route>
         <Route exact path="/register">
            <SignUp />
         </Route>
      </Switch>
    </AuthProvider>
    </>
  );
}

export default App;
