import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

export class Palette extends Component {

    constructor(props) {
        super(props)
        this.state = {
            level: 500,
            format: "hex"
        }
    }
    changeLevel = (level) => {
        this.setState({ level })
    }

    handleChange = (format) => {
        this.setState({ format });
    }

    render() {
        const { colors } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => <ColorBox key={color.hex} background={color[format]} name={color.name} />)
        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.handleChange} />
                <div className="Palette-colors">
                    {/* navbar does here */}
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Palette
