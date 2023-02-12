import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
class Item extends React.Component {
    /*state = {
        itmId: "",
        itmName: ""
    }*/
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            itmId: props.itmId,
            itmName: props.itmName
        }
    }
    static getDerivedStateFromProps(props, state) {
        if (props !== state) {
            //Change in props
            return props;
        }
        return state; // No change to state
    }
    clickHandler = (e) => {
        e.preventDefault()
        //const type = e.target.id
        this.props.delC(this.props.itmId)
    }
    changeHandler = (e) => {
        this.setState({ itmName: e.target.value })
        this.props.updateC(this.props.itmId, e.target.value);

    }
    returnNull = () => {
        return;
    }

    render() {
        return (
            <>
                <form className="container col-9 col-sm-7 col-md-6 col-lg-4 ">
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor={"id " + this.state.itmId}><strong>ID:</strong> </label>
                        <input className="form-control" id={"id " + this.state.itmId} type="text" onChange={this.returnNull} value={this.state.itmId} />
                        <button className="btn btn-danger" id={"d " + this.state.itmId} onClick={this.clickHandler}>Delete</button>
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor={"name " + this.state.itmName} > <strong>Name:</strong> </label>
                        <input className="form-control" id={"name " + this.state.itmName} type="text" onChange={this.changeHandler} value={this.state.itmName} pattern="[0-9]+" />

                    </div>

                    <hr></hr>
                </form>
            </>
        )
    }
}

export default Item;