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
    this.xmlhttpreq = this.xmlhttpreq.bind(this)


    this.getData2()

  }
  /*getData() {
    fetch('https://basselmr.000webhostapp.com/')
      .then(res => { console.log(res); return res.text() })
      .then(txt => console.log(txt));
    fetch('https://basselmr.000webhostapp.com/')
      .then(res => { console.log(res); return res.json() })
      .then(txt => console.log(txt));
  }*/

  async getData2() {
    //console.log("1");
    let x = await fetch('https://basselmr.000webhostapp.com/sub/', {
      method: 'POST',
      body: JSON.stringify({ "1": "2" })
    });
    //console.log("2");
    let y = await x.text();
    console.log("y", y);
    //console.log("step3");
    x = await fetch('https://basselmr.000webhostapp.com/');
    let z = await x.json()
    z = z.map(itm => {
      const b = parseInt(itm.user_id);
      return { user_id: b, user_name: itm.user_name }
    })
    this.setState({ cart: z })
    //console.log("4");
    //console.log("z", z)
    //console.log(this.state)
    let cnt = 0;
    z.forEach(element => {
      cnt += 1
      //console.log(element)
    });
    //console.log(cnt)
    this.setState({ count: cnt });
  }
  xmlhttpreq() {
    const xhr1 = new XMLHttpRequest();
    const url = 'https://basselmr.000webhostapp.com/';
    xhr1.open("POST", url, true);
    xhr1.onreadystatechange = () => {
      if (xhr1.readyState === 4) {
        console.log(xhr1.responseText);
      }
    }
    xhr1.send("RRRRRRRRRRRRR");




    console.log("done123");

  }

  render() {
    const ss = this.state.cart.map(itm => <Item key={itm.user_id} itmId={itm.user_id} itmName={itm.user_name} updateC={this.updateItem} delC={this.deleteItem} />)
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
        <button className='btn btn-primary col-3' onClick={() => { this.updateItem(1, "eee"); this.getData2(); this.getData2() }}>Save</button>
        <button className='btn btn-primary col-3 m-2' onClick={() => this.xmlhttpreq()}>xmlhttprequest</button>
      </div >
    )
  }
}
export default App;
