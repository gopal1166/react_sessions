/**
 * Login form component
 */
import React from 'react';

class Login extends React.Component {
    state = {
        email: null,
        password: null,
        emailErrorMessage: null,
        passwordErrorMessage: null 
    }

    /**
     * @summary to update the email in state with the entered email
     * @param {object} event - this event object contains the email value
     *      we'll access the password using event.target.value
     * @returns {None}
     */
    emailHandler = (event) => {
    //    console.log(event.target.value)
        this.setState({
            email: event.target.value
        })
    }

    /**
     * @summary to update the password in state with the entered password
     * @param {object} event - this event object constains the password value
     *      we'll access the password using event.target.value
     */
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    /**
     * @summary this function will console the email and password from state
     * @param {object} event 
     * @return {None}
     */
    btnHandler = (event) => {
        event.preventDefault()
        
    }


    render() {
        return(
            <div>
                <form>
                    Email: <input type='text' name='email' 
                        onChange={this.emailHandler}
                    />
                  

                    <br />
                    Password: <input type='password' name='password' 
                        onChange={this.passwordHandler}
                    />
        

                    <br />
                    <button
                        onClick={this.btnHandler}
                    >submit</button>
                </form>
            </div>
        )
    }
}

export default Login;