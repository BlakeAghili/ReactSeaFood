import React from 'react';
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from '../sample-fishes'
import Fish from "./Fish";

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

    loadSampleFishes  = () => {
      //alert('loading fish');
        this.setState({fishes: sampleFishes});
    };

    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Fresh Daily Food'/>
                    <ul className='fishes'>
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} fishDetails = {this.state.fishes[key]}/>)}
                    </ul>
                </div>
                <Order />
                <Inventory addFish = {this.addFish} loadSampleFishes = {this.loadSampleFishes} />
            </div>
        )
    }
}

export default App;
