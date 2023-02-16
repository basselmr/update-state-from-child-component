import react from 'react'
import './App.css';
import Item from './components/Item';
import AddItem from './components/AddItem';
import { addCart, updateItem, deleteItem } from './functions/Fun1'
import MyData from './Data/Data.json';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";


class App extends react.Component {
  constructor() {
    super();
    this.state = MyData;
    this.addCart = addCart.bind(this);
    this.updateItem = updateItem.bind(this);
    this.deleteItem = deleteItem.bind(this);
    this.getData()

  }
  getData() {
    fetch('https://basselmr.000webhostapp.com/')
      .then(res => { console.log(res); return res.text() })
      .then(txt => console.log(txt));
    fetch('https://basselmr.000webhostapp.com/')
      .then(res => { console.log(res); return res.json() })
      .then(txt => console.log(txt));
  }

  async getData2() {
    console.log("1");
    let x = await fetch('https://basselmr.000webhostapp.com/');
    console.log("2");
    let y = await x.text();
    console.log("y", y);
    console.log("3");
    x = await fetch('https://basselmr.000webhostapp.com/');
    let z = await x.json();
    console.log("4");
    console.log("z", z);

  }


  render() {
    const ss = this.state.cart.map(itm => <Item key={itm.id} itmId={itm.id} itmName={itm.name} updateC={this.updateItem} delC={this.deleteItem} />)
    //console.log(ss)
    return (
      <div className="App" >
        <h1 className="btn btn-primary position-relative m-2">Total Items
          <p className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {this.state.count}
          </p>
        </h1>

        <AddItem addC={this.addCart} />
        <hr></hr>
        {ss}
        <button className='btn btn-primary col-3' onClick={() => { this.updateItem(1, "eee"); this.getData(); this.getData2() }}>Save</button>
      </div >
    )
  }
}
export default App;
