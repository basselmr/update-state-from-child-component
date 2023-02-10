import react from 'react'
import './App.css';
import Item from './components/Item';
import AddItem from './components/AddItem';

class App extends react.Component {
  state = {
    cart: [{ id: 1, name: "bassel" }, { id: 2, name: "ahmad" }],
    total: 2
  }

  render() {
    const ss = this.state.cart.map(itm => <Item itmId={itm.id} itmName={itm.name} />)
    console.log(ss[0])
    return (
      <div className="App" >
        <AddItem />
        <hr></hr>
        {ss}
      </div>
    )

  }

}

export default App;
