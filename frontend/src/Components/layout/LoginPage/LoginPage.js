import React, {Component} from 'react';
// import App from '../App'
import {withRouter} from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const LoginRedirect = await fetch(`${process.env.REACT_APP_API_URL}/user/login`, {
            method: "GET",
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const parsedResponse = await LoginRedirect.json();
        if (parsedResponse.status.message === 'Success') {
            console.log('Logined In!')
            this.props.history.push('/stocks')
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Username</label>
                <input type='text' name="username" onChange={this.handleChange} />
                <label> Password</label>
                <input type='password' name="password" onChange={this.handleChange} />
                <label> Email</label>
                <input type='text' name="email" onChange={this.handleChange} />
                <button type="submit" class="modal-close waves-effect waves-green btn-flat">Agree</button>
            </form>
        )
    }
}

export default withRouter(Login);