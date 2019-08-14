import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export class Palette extends Component {

    constructor(props) {
        super(props)
        this.state = {
            level: 500
        }
    }
    changeLevel = (level) => {
        this.setState({ level })
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map(color => <ColorBox key={color.hex} background={color.hex} name={color.name} />)
        return (
            <div className="Palette">
                <Slider defaultValue={level} step={100} min={100} max={900} onAfterChange={this.changeLevel} />
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
