import React from 'react';
import {formatPrice} from "../helpers";

export class Fish extends React.Component{
    render() {
        const isAvailable = this.props.fishDetails.status === 'available';
        return (
            <li className='menu-fish'>
                <img src={this.props.fishDetails.image} alt={this.props.fishDetails.name}/>
                <h3 className='fish-name'>
                    {this.props.fishDetails.name}
                    <span className='price'>{formatPrice(this.props.fishDetails.price)}</span>
                </h3>
                <p>
                    {this.props.fishDetails.desc}
                </p>
                <button disabled={!isAvailable}>{isAvailable ? 'Add to Cart' : 'Sold Out!'}</button>
            </li>
        )
    }
}

export default Fish;
