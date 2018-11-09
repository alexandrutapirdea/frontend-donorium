import React from 'react'
import './Login.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render() {
        return (
            <div id="login">
                <MuiThemeProvider>
                    <div>
                        <h3 class="loginTitle">Login</h3>
                        <p className="loginStory">
                            Pentru a putea folosit platforma, va rugam sa va logati.
                        </p>
                        <TextField
                            style ={styles.textfield}
                            multiLine={true}
                            error
                            inputStyle={{ backgroundColor: 'red' }}
                            label="Nume utilizator"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <TextField
                            style ={{width: '90%' , color: 'red'}}
                            error
                            type="password"
                            label="Parola"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <Button id="loginButton" label="Submit" color="primary" variant="contained" style={style} onClick={(event) => this.handleClick(event)}>
                            Login
                        </Button>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};

const styles = {
    textfield:{
        width:'90%',
        color: 'red',
}
}
export default Login;

