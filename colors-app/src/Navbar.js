import React, { Component } from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export class Navbar extends Component {

    state = {
        format: "hex"
    }

    changeFormat = (e) => {
        this.setState({ format: e.target.value },()=>{this.props.handleChange(this.state.format)});
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;
        return (

            <header className="Navbar">
                <div className="logo">
                    <a href="#">react-to-color-picker</a>
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider defaultValue={level} step={100} min={100} max={900} onAfterChange={changeLevel} />
                    </div>
                </div>
                <div className="select-container">
                    <Select
                        value={format}
                        onChange={this.changeFormat}
                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }}
                    >
                        <MenuItem value={'hex'}>#ffffff</MenuItem>
                        <MenuItem value={'rgb'}>rgb(255,255,255,0)</MenuItem>
                        <MenuItem value={'rgba'}>rgba(255,255,255,0)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}

export default Navbar
