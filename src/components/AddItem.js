import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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

                <form className="container col-9" onSubmit={this.add}>
                    <h3>ADD NEW</h3>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="newName">New: </label>
                        <input className="form-control" id="newName" type='text' onChange={this.inputChangedHandler} value={this.state.name} />
                        <button className="btn btn-secondary" >ADD</button>
                    </div>

                </form>
            </>

        )
    }

}

export default AddItem;