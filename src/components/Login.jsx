import { useContext } from "react";
import { useRef } from "react";
import { login_action } from "../actions/loginActions";
import { isEmail } from "../functions/isValid";
import DataContext from "./DataContext";
import Logout from "./Logout";

function Login() {

    const { loggedIn, dispachLoggedIn } = useContext(DataContext);

    const emailRef = useRef();
    const passwordRef = useRef();

    const submit = () => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if (isEmail(email) && password) {
            dispachLoggedIn(login_action({ email, password }));
        }
    }

    if (loggedIn) {
        return (
            <Logout />
        );
    }

    const svg1 = <svg width="28" height="32" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 16C17.912 16 21.0833 12.8287 21.0833 8.91671C21.0833 5.00469 17.912 1.83337 14 1.83337C10.088 1.83337 6.91667 5.00469 6.91667 8.91671C6.91667 12.8287 10.088 16 14 16Z" stroke="white" strokeWidth="2" />
        <path d="M21.0833 18.8334H21.582C22.6177 18.8337 23.6176 19.2121 24.394 19.8977C25.1703 20.5832 25.6696 21.5287 25.798 22.5564L26.3519 26.982C26.4017 27.3807 26.3662 27.7855 26.2476 28.1694C26.1291 28.5533 25.9303 28.9076 25.6643 29.2088C25.3984 29.5099 25.0714 29.7511 24.7051 29.9163C24.3388 30.0814 23.9416 30.1668 23.5398 30.1667H4.46017C4.05838 30.1668 3.66116 30.0814 3.29489 29.9163C2.92861 29.7511 2.60165 29.5099 2.3357 29.2088C2.06976 28.9076 1.87091 28.5533 1.75236 28.1694C1.63381 27.7855 1.59827 27.3807 1.64809 26.982L2.20059 22.5564C2.32907 21.5282 2.82876 20.5824 3.60568 19.8968C4.38261 19.2111 5.38324 18.833 6.41942 18.8334H6.91667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>;

    const svg2 = <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.3125 0.125C18.8193 0.124658 17.3467 0.474101 16.0128 1.14533C14.6789 1.81656 13.5208 2.7909 12.6313 3.99029C11.7418 5.18967 11.1456 6.58074 10.8905 8.05203C10.6354 9.52332 10.7284 11.0339 11.1622 12.4628L0.125 23.5V29.875H6.5L17.5373 18.8377C18.8525 19.237 20.2384 19.348 21.6005 19.1632C22.9625 18.9784 24.2687 18.5021 25.43 17.7668C26.5914 17.0315 27.5805 16.0545 28.3301 14.9024C29.0797 13.7502 29.5721 12.45 29.7738 11.0904C29.9754 9.73069 29.8816 8.34354 29.4986 7.02343C29.1157 5.70332 28.4527 4.48129 27.5547 3.4406C26.6568 2.39991 25.545 1.56503 24.2953 0.992861C23.0455 0.420693 21.687 0.124681 20.3125 0.125ZM20.3125 17.125C19.581 17.1246 18.8535 17.0165 18.1535 16.8041L16.9348 16.4344L16.0349 17.3343L12.6551 20.7141L11.1899 19.25L9.6875 20.7524L11.1527 22.2176L9.46756 23.9027L8.00237 22.4375L6.5 23.9399L7.96519 25.4051L5.62025 27.75H2.25V24.3797L12.6646 13.9651L13.5656 13.0652L13.1959 11.8465C12.7417 10.3494 12.7712 8.74728 13.2802 7.26794C13.7891 5.7886 14.7516 4.50742 16.0307 3.60663C17.3097 2.70584 18.8403 2.23132 20.4046 2.25056C21.9689 2.26981 23.4873 2.78184 24.7439 3.71383C26.0004 4.64581 26.9311 5.95029 27.4034 7.4417C27.8758 8.93311 27.8659 10.5355 27.3751 12.0209C26.8843 13.5064 25.9375 14.7992 24.6696 15.7156C23.4016 16.6319 21.8769 17.1251 20.3125 17.125Z" fill="white" />
        <path d="M21.375 10.75C22.5486 10.75 23.5 9.79861 23.5 8.625C23.5 7.45139 22.5486 6.5 21.375 6.5C20.2014 6.5 19.25 7.45139 19.25 8.625C19.25 9.79861 20.2014 10.75 21.375 10.75Z" fill="white" />
    </svg>;

    return (
        <div className='container'>
            <h1>Login</h1>
            <h2>Please enter you Login and your Password</h2>

            <div className='input-container'>
                {svg1}
                <input type='email' ref={emailRef} placeholder='Username or E-mail' />
            </div>
            <div className='input-container'>
                {svg2}
                <input type='password' ref={passwordRef} placeholder='Password' />
            </div>

            <button onClick={submit}>Login</button>
        </div>
    );
}

export default Login;