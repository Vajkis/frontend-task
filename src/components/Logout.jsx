import { useContext, useEffect, useState } from "react";
import { logout_action } from "../actions/loginActions";
import DataContext from "./DataContext";
import axios from 'axios';

function Logout() {

    const [joke, setJoke] = useState({});

    useEffect(() => {
        axios.get('https://official-joke-api.appspot.com/jokes/random')
            .then(res => setJoke(res.data));
    }, []);

    const { dispachLoggedIn } = useContext(DataContext);

    const submit = () => {
        dispachLoggedIn(logout_action());
    }

    return (
        <div className='container'>
            <h3>{joke.setup}</h3>
            <h2>{joke.punchline}</h2>
            <button className='logout' onClick={submit}>Logout</button>
        </div>
    );
}

export default Logout;