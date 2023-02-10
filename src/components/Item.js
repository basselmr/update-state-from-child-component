import React from "react";
class Item extends React.Component {
    state = {
        itmId: "",
        itmName: ""
    }
    constructor(props) {
        super(props);
        this.props = props;
        this.state = props
    }
    clickHandler = (e) => {
        e.preventDefault()
        const type = e.target.id

        if (type.substr(0, 2) === "s ") {
            alert("save")
            alert(type.substr(2))
        } else if (type.substr(0, 2) === "d ") {
            alert("delete")
            alert(type.substr(2))

        }

    }
    changeHandler = (e) => {

        this.setState({ itmName: e.target.value })
    }




    render() {
        return (
            <>
                <form >
                    <div>
                        <label><strong>ID:</strong> </label>
                        <input id={"id " + this.state.itmId} type="text" value={this.state.itmId} />
                    </div>
                    <div>
                        <label><strong>Name:</strong> </label>
                        <input id={"name " + this.state.itmName} type="text" onChange={this.changeHandler} value={this.state.itmName} />
                    </div>
                    <button id={"s " + this.state.itmId} onClick={this.clickHandler}>save</button>
                    <button id={"d " + this.state.itmId} onClick={this.clickHandler}>delete</button>
                    <hr></hr>
                </form>
            </>
        )
    }
}

export default Item;