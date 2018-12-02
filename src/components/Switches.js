import React from 'react';
import Switch from '@material-ui/core/Switch';

class Switches extends React.Component {
    state = {
        checked: this.props.checked,
    };

    handleChange = name => event => {
        console.log("event.target.checked",event.target.checked);
        this.setState({ [name]: event.target.checked });
    };


    // static getDerivedStateFromProps(props, state) {
    //     console.log("props",props);
    //     console.log("state",state);
    //     if (props.checked !== state.checked) {
    //         return {
    //             prevPropsChecked: props.checked,
    //             checked: props.checked
    //         };
    //     }
    //     return null;
    // }

    render() {
        return (
            <div>
                <span>{this.props.filterName}</span>
                <Switch
                    checked={this.state.checked}
                    onChange={this.handleChange('checked')}
                    value="checked"
                />
            </div>
        );
    }
}

export default Switches;