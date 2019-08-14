import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css';


export class Palette extends Component {

    render() {
        const colorBoxes = this.props.colors.map(color => <ColorBox key={color.color} background={color.color} name={color.name} />)
        return (
            <div className="Palette">
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
