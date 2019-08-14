import React, { Component } from 'react'
import {Link} from 'react-router-dom';


export class PaletteList extends Component {


    render() {
        const palettes = this.props.palettes;
        return (
            <div>
                <h1>Colors</h1>
                {palettes.map(palette => (<Link key={palette.id} to={`/palette/${palette.id}`}>{palette.paletteName}</Link>))}
            </div>
        )
    }
}

export default PaletteList
