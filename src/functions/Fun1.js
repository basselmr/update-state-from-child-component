import Item from "../components/Item";

function addCart(name) {
    if (name === "") {
        //alert("empty");
        //return;
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
    this.setState({ count: this.state.count + 1 })
}
function updateItem(id, name) {

    const newData = this.state.cart.map(itm => {
        if (itm.id === id) {
            return { ...itm, name: name };
        } else {
            return itm;
        }


    })
    //console.log(newData)
    this.setState({ cart: newData });

}
function deleteItem(id) {
    const newData = this.state.cart.filter(itm => {
        if (itm.id !== id) {
            return itm;
        }
    })
    //console.log(newData)
    var c = 1;
    newData.map(itm => {
        itm.id = c;
        c += 1;
    })
    this.setState({ cart: newData });
    this.setState({ count: this.state.count - 1 })
}
export { addCart, updateItem, deleteItem }