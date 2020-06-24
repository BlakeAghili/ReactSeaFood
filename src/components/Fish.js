import React from 'react';
import {formatPrice} from "../helpers";
import PropTypes from 'prop-types'

export class Fish extends React.Component{
    static propTypes = {
        addToOrder: PropTypes.func,
        fishDetails: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        })
    }
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    };
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
                <button onClick={this.handleClick}
                    disabled={!isAvailable}>{isAvailable ? 'Add to Cart' : 'Sold Out!'}</button>
            </li>
        )
    }
}

export default Fish;
