import { checkIfLoggedIn_const, login_const, logout_const } from "../constants/loginConstants";

export function checkIfLoggedIn_action() {
    return {
        type: checkIfLoggedIn_const
    };
}

export function login_action(data) {
    return {
        type: login_const,
        payload: data
    };
}

export function logout_action() {
    return {
        type: logout_const
    };
}