import React from 'react'
import './Login.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'Test',
            password:'1234'
        }
    }
    render() {
        return (
            <div id="login">
                <MuiThemeProvider>
                    <div>
                        <h2>Login</h2>
                        <TextField
                            style ={{width: '95%'}}
                            placeholder="Nume utilizator"
                            label="Nume utilizator"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <TextField
                            style ={{width: '95%'}}
                            type="password"
                            placeholder="Parola"
                            label="Parola"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <Button label="Submit" color="primary" variant="contained" style={style} onClick={(event) => this.handleClick(event)}>
                            Submit
                        </Button>
                        {/*<Button variant="contained" color="primary" className={classes.button}>*/}
                            {/*Primary*/}
                        {/*</Button>*/}
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Login;

