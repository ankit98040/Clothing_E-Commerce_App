import React from 'react';
import './signin.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    return() {
        this.render(
            <div className='sign-in'>
                <h2>I Already have an account</h2>
                <span>Sign in with your email and password</span>
            </div>
        )
    }
}

export default SignIn;