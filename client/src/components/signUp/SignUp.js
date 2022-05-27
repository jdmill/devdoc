import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value);
        } else if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        };
    };

    const handleSubmit = (e) => {
        e.preventdefault();
        // TODO: change global state of logged in, or create JWT token or something. then the redirect below
        const matchError = "The passwords must match"
        const pass = document.querySelector('#signupPass');
        const confPass = document.querySelector('#confirmPass');

        if (pass.value !== confPass.value) {
            setError(matchError);
            return;
        };
        setError('');
        window.location.href = '/app/projects';
    };

    return (
        <section className="login__card">
            <form action="">
            <label htmlFor="signupUsername">
                    Username
                </label>
                <input
                    id="signupUsername"
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
                <label htmlFor="signupEmail">
                    Email
                </label>
                <input
                    id="signupEmail"
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                <label htmlFor="signupPass">
                    Password
                </label>
                <input
                    id="signupPass"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <label htmlFor="confirmPass">
                    Confirm Password
                </label>
                <input
                    id="confirmPass"
                    type="password"
                    name="confirmPassword"
                />
                <p className="error">{error}</p>
                <input
                    type="submit"
                    value="Register"
                    onSubmit={handleSubmit}
                />
            </form>
            <p>Already have an account? <Link to='/app/login'>Log in</Link></p>
        </section>
    );
};

export default SignUp;