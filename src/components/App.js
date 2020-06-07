import React from 'react';
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    };

    addFish = (fish) => {
        console.log('adding a fish');
        // 1: Take a COPY of existing state
        const fishesCopy = {...this.state.fishes};
        // 2: add the new fish to this copy.
        fishesCopy[`fish${Date.now()}`] = fish;
        // use built-in setState to update the state with this new copy.
        this.setState({fishes: fishesCopy});
    };

    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Fresh Daily Food'/>
                </div>
                <Order />
                <Inventory addFish = {this.addFish} />
            </div>
        )
    }
}

export default App;
