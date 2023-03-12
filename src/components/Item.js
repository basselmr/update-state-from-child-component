import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { GiSave } from 'react-icons/gi';
import { BsTrash } from 'react-icons/bs';
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
    deleteHandler = (e) => {
        e.preventDefault()
        //const type = e.target.id
        this.props.delC(this.props.itmId)
    }
    saveHandler = (e) => {
        e.preventDefault()
        //const type = e.target.id
        this.props.SaveC(this.props.itmId, this.state.itmName)
    }
    changeHandler = (e) => {
        //console.log(e.target.value);
        this.setState({ itmName: e.target.value })
        this.props.UpdateC(this.props.itmId, e.target.value);
        //console.log("done")
    }
    returnNull = () => {
        return;
    }
    render() {
        return (
            <>
                <form className="container col-9 col-sm-9 col-md-9 col-lg-6 ">
                    {/*<div className="input-group mb-2">
                        <label className="input-group-text" htmlFor={"id " + this.state.itmId}><strong>ID:</strong> </label>
                        <input className="form-control" id={"id " + this.state.itmId} type="text" onChange={this.returnNull} value={this.state.itmId} /pattern="[0-9]+">
                        <button className="btn btn-danger" id={"d " + this.state.itmId} onClick={this.deleteHandler}>Delete</button>

        </div>*/}
                    <div className="input-group mb-2">
                        <label className="input-group-text" htmlFor={"name " + this.state.itmName} > <strong>Name:</strong> </label>
                        <input className="form-control" id={"name " + this.state.itmName} type="text" onChange={e => this.changeHandler(e)} value={this.state.itmName} />

                        <GiSave className="btn fs-5 m-0 p-2 " style={{ color: 'white', backgroundColor: 'gray' }} size="2em" onClick={this.saveHandler} />
                        <BsTrash className="btn fs-5 m-0 p-2 " style={{ color: 'white', backgroundColor: 'red' }} size="2em" onClick={this.deleteHandler} />

                    </div>
                    <hr></hr>
                </form>
            </>
        )
    }
}

export default Item;