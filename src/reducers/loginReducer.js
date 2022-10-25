import { checkIfLoggedIn_const, login_const, logout_const } from "../constants/loginConstants";
import users from "../data/users";

function login_reducer(state, action) {
    let newState = state;

    switch (action.type) {
        case checkIfLoggedIn_const:
            newState = localStorage.getItem('user') ? true : false;
            break;

        case login_const:
            const { email, password } = action.payload;
            for (const user of users) {
                if (email === user.email && password === user.password) {
                    newState = true;
                    localStorage.setItem('user', JSON.stringify(action.payload));
                }
            }
            break;

        case logout_const:
            localStorage.removeItem('user');
            newState = false;
            break;
        default:
    }

    return newState;
}

export default login_reducer;