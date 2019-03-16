/**
 * Login form fields validation
 */
import React from 'react';

class Login extends React.Component {
    state = {
        email: null,
        password: null,
        errors: {}
    }

    /**
     * @summary to store the email in state 
     * @param {object} event - contains the entered email value
     * @returns {none}
     */
    emailHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    /**
     * @summary to store the password in state 
     * @param {object} event - contains the entered password value
     * @returns {none} 
     */
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    /**
     * @summary validate and submit the form data to backend
     * @param {object} event - 
     */
    btnHandler = (event) => {
        event.preventDefault()
        console.log(this.state.email)
        console.log(this.state.password)
        /**Here we do validation and send to backend */
        // console.log(this.fieldValidation())
        if (this.fieldValidation()) {
            alert('form data is valid')
        } else {
            alert("form has erros")
        }
    }

    /**
     * @summary validates the email and password
     * @description 
     *        WE're validating the email and password that are stored in state
     *        each field two types of validation
     *        
     *        defining errors object and storing in the state if any errors
     * @param {none}
     * @returns {boolean} true/false - based on fields validation
     */
    fieldValidation = () => {
        let isFormValid = true
        const { email, password } = this.state
        let errors = {}
        if (!email) {
            isFormValid = false
            errors['email'] = "Email is mandatory"
        }

        if (!password) {
            isFormValid = false
            errors['password'] = "Password is mandatory"
        }

        this.setState({
            errors: errors 
        })

        return isFormValid
    }

    /**
     * @returns login form with validation error messages
     */
    render() {
        const { errors } = this.state
        return (
            <div>
                <br />
                <form>
                    Email: <input
                        type='text' name='email' onChange={this.emailHandler}
                    />
                    <p style={{color: "red"}}>
                        {errors.email}
                    </p><br />
                    Password: <input
                        type='password' name='password'
                        onChange={this.passwordHandler}
                    />
                    
                    <p style={{color: "red"}}>
                        {errors.password}
                    </p>    
                    <br />
                    <input type='button' value='submit'
                        onClick={this.btnHandler} />
                </form>
            </div>
        )
    }
}

export default Login;