import React from 'react';
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from './Login'
import firebase from "firebase";


export class Inventory extends React.Component{
    authenticate = (loginProvider) => {
        alert(loginProvider);
    }

    render() {
        {/* return <Login authenticate={this.authenticate}/> */}

        return (
            <div className='inventory'>
                <h2>Inventory</h2>
                {Object.keys(this.props.fishes).map(key => <EditFishForm
                    key={key}
                    index = {key}
                    fish = {this.props.fishes[key]}
                    updateFish = {this.props.updateFish}
                    deleteFish = {this.props.deleteFish}
                />)}
                <AddFishForm addFish = {this.props.addFish}/>
                <button onClick={this.props.loadSampleFishes}>Load Sample Data</button>
            </div>
        )
    }
}

export default Inventory;
