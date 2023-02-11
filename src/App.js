import react from 'react'
import './App.css';
import Item from './components/Item';
import AddItem from './components/AddItem';

class App extends react.Component {

  constructor() {
    super();
    this.state = {
      cart: [{ id: 1, name: "bassel" }, { id: 2, name: "ahmad" }],
      total: 2
    }

  }



  addCart = (name) => {
    if (name === "") {
      alert("empty");
      return;
    }
    const it = this.state.cart;
    let max = 0;
    it.forEach(element => {
      //console.log(element)
      if (max < element.id) {
        //console.log("max ", max, "ID ", element.id)
        max = element.id
        //console.log("max", max)
      }
    });
    max += 1

    //console.log("temp", it)
    this.setState({ cart: [...this.state.cart, { id: max, name: name }] })
    this.setState({ total: this.state.total + 1 })


  }


  render() {
    const ss = this.state.cart.map(itm => <Item key={itm.id} itmId={itm.id} itmName={itm.name} />)
    console.log(ss)
    return (
      <div className="App" >
        <h1>Total Items: {this.state.total}</h1>
        <AddItem addC={this.addCart} />
        <hr></hr>
        {ss}

      </div>
    )

  }

}

export default App;
