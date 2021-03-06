import React from 'react';
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from '../sample-fishes'
import Fish from "./Fish";
import base from "../base"

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        console.log('MOUNTED!!!!');
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate() {
        //console.log(this.state.order);
        console.log('component updated');
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }
    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = (fish) => {
        console.log('adding a fish');
        // 1: Take a COPY of existing state
        const fishesCopy = {...this.state.fishes};
        // 2: add the new fish to this copy.
        fishesCopy[`fish${Date.now()}`] = fish;
        // use built-in setState to update the state with this new copy.
        this.setState({fishes: fishesCopy});
    };

    updateFish = (key, updatedFish) => {
        // get a copy of the current state
        const fishes = {...this.state.fishes};
        // update the state
        fishes[key] = updatedFish;
        // set the new state
        this.setState({fishes: fishes});
    }

    removeFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({order: order});
    }

    deleteFish = (key) => {
        // get a copy of current state
        const fishes = {...this.state.fishes};
        // set fish we don't want to NULL
        fishes[key] = null;
        // update state
        this.setState({fishes: fishes});
    }

    loadSampleFishes  = () => {
      //alert('loading fish');
        this.setState({fishes: sampleFishes});
    };

    addToOrder = (key) => {
      // 1. Take a Copy of the state.
      // 2. Either add or update
      // 3. call setState.
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order: order});
    };

    render() {
        return (
            <div className='catch-of-the-day'>

                <div className='menu'>
                    <Header tagline='Fresh Daily Food'/>
                    <ul className='fishes'>
                        {Object.keys(this.state.fishes)
                            .map(key =>
                                <Fish key={key}
                                      index = {key}
                                      fishDetails = {this.state.fishes[key]}
                                      addToOrder = {this.addToOrder}
                                />
                            )
                        }
                    </ul>
                </div>

                <Order
                    fishes={this.state.fishes}
                    order={this.state.order}
                    removeFromOrder = {this.removeFromOrder}
                />

                <Inventory
                    addFish = {this.addFish}
                    updateFish = {this.updateFish}
                    deleteFish = {this.deleteFish}
                    loadSampleFishes = {this.loadSampleFishes}
                    fishes = {this.state.fishes}
                />
            </div>
        )
    }
}

export default App;
