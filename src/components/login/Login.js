import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "../../firebase";
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

function Login() {

    const [state, dispatch] = useStateValue();

    const signin = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {

            dispatch({
                type: actionTypes.SET_USER,
                user:result.user,
            })
            console.log(result);
        })
        .catch((error) => {alert(error.message)});
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" />
                <img src="https://th.bing.com/th/id/OIP.DjrODY3n75WNNrkikMmHSAHaF7?w=236&h=189&c=7&o=5&pid=1.7" alt="" />
            </div>

            <Button type="submit" onClick={signin}>Sign In with your Google Account</Button>
        </div>
    )
}

export default Login
