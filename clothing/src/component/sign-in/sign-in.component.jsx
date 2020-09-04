import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component'; 

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDeault();

        this.setState({ email: '', password: '' });
    } 

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I Already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' value={this.state.email} 
                    handleChange={this.handleChange} 
                    label='email' 
                    type='email' required />

                    <FormInput name='password' type='password' 
                    value={this.state.password} 
                    label='password'
                    handleChange={this.handleChange} 
                    required />

                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default SignIn;