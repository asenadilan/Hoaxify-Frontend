import React from 'react';
import axios from 'axios';

class UserSignupPage extends React.Component {

    state = {
        username: null,
        displayname: null,
        newpassword: null,
        passwordrepeat: null
    };
    onChange = event => {
        const { name, value } = event.target;
        //const value = event.target.value;
        //const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
    onClickSignUp = event => {
        event.preventDefault();
        const { username, displayname, newpassword, passwordrepeat } = this.state
        const body = {
            username,
            displayname,
            newpassword,
            passwordrepeat
        };
        /*    const body = {
            //key ve value isimlendirmeleri aynıysa sadece bir tanesini yazmak yeterli
            username: username,
            displayname: displayname,
            newpassword: newpassword,
            passwordrepeat: passwordrepeat
        };
      
        const body = {
            username: this.state.username,
            displayname: this.state.displayname,
            newpassword: this.state.newpassword,
            passwordrepeat: this.state.passwordrepeat
        };*/
        axios.post('/api/1.0/users/create', body)
    }

    render() {
        return (
            <div>
                <form>
                    <h1>Sign Up</h1>

                    <div>
                        <label>Username</label>
                        <input name="username" onChange={this.onChange} />
                    </div>
                    <div>
                        <label>Display Name</label>
                        <input name="displayname" onChange={this.onChange}></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input name="newpassword" type="password" onChange={this.onChange}></input>
                    </div>
                    <div>
                        <label>Password Repeat</label>
                        <input name="passwordrepeat" type="password" onChange={this.onChange}></input>
                    </div>
                    <button type='submit' onClick={this.onClickSignUp}>Sign Up</button>
                </form>
            </div>
        );
    }
}
export default UserSignupPage;