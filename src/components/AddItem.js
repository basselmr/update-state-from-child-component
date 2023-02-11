import React from "react";
class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "" };
        this.addC = props.addC
        this.inputChangedHandler = this.inputChangedHandler.bind(this);

    }

    inputChangedHandler = (e) => {
        this.setState({ name: e.target.value })
    }
    add = (e) => {
        e.preventDefault()
        //console.log(this.state.name)
        this.addC(this.state.name)
        this.state.name = ""



    }
    render() {
        //console.log(this.state)

        return (
            <>
                <h1>ADD NEW</h1>
                <form onSubmit={this.add}>
                    <label for="newName">New: </label>
                    <input id="newName" type='text' onChange={this.inputChangedHandler} value={this.state.name} />
                    <button >ADD</button>
                </form>
            </>

        )
    }

}

export default AddItem;