import React from 'react'
import './Login.css';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import strings from '../res/strings'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            erros : [],
        }
    }
    //Tests if username and password match and redirects to the calendar page
    handleSubmit = (event) =>{
        this.validate();
        //Call the backend api and check if username and password match

    };
    validate = () =>{
        if(this.state.username === '' || this.state.username === null || this.state.username === undefined)
            this.setState({
                    [event.target.id]: event.target.value
                }
            )
    }

    //Sets state for username and password ( after a key is pressed )
    handleInputChange = (event) => {
        this.setState({
        [event.target.id]: event.target.value
            }
        )
    };

    render() {
        return (
            <div id="login">
                    <div>
                        <h3 className="loginTitle">{strings.login.title}</h3>
                        <p className="loginStory">
                            {strings.login.description}
                        </p>
                        <TextField
                            id="username"
                            style ={styles.textfield}
                            error
                            label="Nume utilizator"
                            onChange = {this.handleInputChange}
                        />
                        <br/>
                        <TextField
                            id="password"
                            style ={styles.textfield}
                            error
                            type="password"
                            label="Parola"
                            onChange = {this.handleInputChange}
                        />
                        <br/>
                        <Button id="loginButton" label="Submit" color="primary" variant="contained"  onClick={this.handleSubmit}>
                            {strings.login.button}
                        </Button>
                    </div>
            </div>
        );
    }
}
//Style TextField component

const styles = {
    textfield:{
        width:'90%',
        color: 'red',
}
};

export default Login;

