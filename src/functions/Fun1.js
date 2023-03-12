

function addCart(name) {
    if (name === "") {
        //alert("empty");
        //return;
    }
    const it = this.state.cart;
    let max = 0;
    it.forEach(element => {
        //console.log(element)
        if (max < element.user_id) {
            //console.log("max ", max, "ID ", element.id)
            max = element.user_id
            //console.log("max", max)
        }
    });
    max += 1
    //console.log("temp", it)
    this.setState({ cart: [...this.state.cart, { user_id: max, user_name: name }] })
    this.setState({ count: this.state.count + 1 })
}
function updateItem(id, name) {
    const newData = this.state.cart.map(itm => {
        if (itm.user_id === id) {
            return { ...itm, user_name: name };
        } else {
            return itm;
        }
    })
    //console.log(id, name)
    this.setState({ cart: newData });
}

function saveRecord(id, name) {
    const xhr1 = new XMLHttpRequest();
    const url = 'http://backend.ugaritsoft.com/';
    xhr1.open("POST", url, true);
    xhr1.onreadystatechange = () => {
        if (xhr1.readyState === 4) {
            //console.log(xhr1.responseText);
            this.getData2()
        }
    }
    let d = {
        type: "update",
        data: {
            user_id: id,
            user_name: name
        }
    }
    xhr1.send(JSON.stringify(d));
}
function deleteItem(id) {
    const xhr1 = new XMLHttpRequest();
    const url = 'http://backend.ugaritsoft.com/';
    xhr1.open("POST", url, true);
    xhr1.onreadystatechange = () => {
        if (xhr1.readyState === 4) {
            //console.log(xhr1.responseText);
            if (xhr1.responseText === '1') {
                this.getData2()
            }
        }
    }
    let d = {
        type: "delete",
        data: {
            user_id: id
        }
    }
    xhr1.send(JSON.stringify(d));
    /*const newData = this.state.cart.filter(itm => {
        if (itm.user_id !== id) {
            return itm;
        }
    })
    //console.log(newData)
    var c = 1;
    newData.map(itm => {
        itm.user_id = c;
        c += 1;
    })
    this.setState({ cart: newData });
    this.setState({ count: this.state.count - 1 })*/
}
function addItem(name) {
    const xhr1 = new XMLHttpRequest();
    const url = 'http://backend.ugaritsoft.com/';
    xhr1.open("POST", url, true);
    xhr1.onreadystatechange = () => {
        if (xhr1.readyState === 4) {
            //console.log(xhr1.responseText);
            if (xhr1.responseText === '1') {
                this.getData2()
            }
        }
    }
    let d = {
        type: "add",
        data: {
            user_name: name
        }
    }
    xhr1.send(JSON.stringify(d));
    //console.log("done123");
}
export { addCart, updateItem, deleteItem, addItem, saveRecord }