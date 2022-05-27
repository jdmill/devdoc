import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        };
    };

    const handleSubmit = (e) => {
        e.preventdefault();
        // TODO: change global state of logged in, or create JWT token or something. then the redirect below
        window.location.href = '/app/projects';
    };

    return (
        <section className="login__card">
            <form action="">
                <label htmlFor="loginEmail">
                    Email
                </label>
                <input
                    id="loginEmail"
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <label htmlFor="loginPass">
                    Password
                </label>
                <input
                    id="loginPass"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    value="Log In"
                    onSubmit={handleSubmit}
                />
            </form>
            <p>Dont already have an account? <Link to='/app/signup'>Sign up</Link></p>
        </section>
    );
};

export default Login;