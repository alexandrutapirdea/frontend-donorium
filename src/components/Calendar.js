import React from 'react';
import DayPicker from 'react-day-picker/DayPicker';
import 'react-day-picker/lib/style.css';
import './Login.css';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ro';
import Switches from './Switches'
import Button from '@material-ui/core/Button';
import filters from '../res/filters'

const language = "ro";

const birthdayStyle = `.DayPicker-Day--today {
  background-color: red !important;
  color: white !important;
}`;

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters : filters,
            active : true
        }
    }

    resetButtons = () => {
        this.setState({active : false});
        console.log(this.state.active);
    };

    render() {
        return (
            <div>
                {/*<img src={require('../res/images/donorium.png')} alt="Logo" id="logo"/>*/}
                <div>Varianta de logo cu negru si rosu</div>
                <style>{birthdayStyle}</style>
                <DayPicker
                    localeUtils={MomentLocaleUtils}
                    locale={language}
                />
                <h3>Filtre</h3><Button onClick={this.resetButtons}>Resetare</Button>
                {this.state.filters.map((filterName) =>
                    <Switches key={Math.random()} filterName={filterName} checked={this.state.active}/>
                )
                }
            </div>
        )

    }
}
export default Calendar;