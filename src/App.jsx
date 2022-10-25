import { useReducer, useEffect } from "react";
import { checkIfLoggedIn_action } from "./actions/loginActions";
import login_reducer from "./reducers/loginReducer";
import Background from './components/Background';
import DataContext from "./components/DataContext";
import Login from './components/Login';
import './scss/App.scss';

function App() {

  const [loggedIn, dispachLoggedIn] = useReducer(login_reducer, null);

  useEffect(() => {
    dispachLoggedIn(checkIfLoggedIn_action())
  }, []);

  return (
    <>
      <DataContext.Provider value={{
        loggedIn,
        dispachLoggedIn
      }}>
        <Background />
        <Login />
      </DataContext.Provider>
    </>
  );
}

export default App;
