import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state={
      array: [],
      name: '',
      price: '',
      imageUrl: '',
      inventory:[]
    };
    this.update = this.update.bind(this)


  }


componentDidMount(){
  
  axios.get('/api/inventory').then(response => {
      this.setState({
        inventory: response.data
      })
    })
  // axios.get('/api/form').then(response => {
  //   this.setState({
  //     form : response.data
  //   })
  // })
}


handleChangeImageUrl = (e) => {
  this.setState({ imageUrl: e.target.value })
}

handleChangeName = (e) => {
  this.setState({ name: e.target.value })
}

handleChangePrice =(e) => {
  this.setState({ price: e.target.value})
}

cancelPicture = () => {
  let cancel = {
  imageUrl: this.state.imageUrl,
  name: this.state.name,
  price: this.state.price,
};
axios.post('/api/controller',cancel).then(results => {
  this.setState({ pictures: results.data });

})
}



addToInventory = () => {
  let add ={
  imageUrl: this.state.imageUrl,
  name: this.state.name,
  price: this.state.price,
};

axios.post('/api/controller',add).then(results => {

  this.setState({ pictures: results.data });
})
}






  render() {
    console.log(this.state.inventory)
    return (
      <div className="App">

      <div className="Dashboard"></div>

      <div className="Form"></div>
      <Dashboard/>
      <Form/>
      <Header/>
      
        <input onChange={this.handleChangeImageUrl}placeholder="Image"/>
        <input onChange={this.handleChangeName}placeholder="Name"/>
        <input onChange={this.handleChangePrice}placeholder="Price"/>
        <button onClick={this.cancelPicture}>Cancel</button>
        <button onClick={this.addToInventory}>Add to Inventory</button>

      </div>
    );
  }
}

export default App;











{/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}