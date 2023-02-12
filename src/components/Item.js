import React from "react";
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
        const type = e.target.id
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
                <form >
                    <div>
                        <label htmlFor={"id " + this.state.itmId}><strong>ID:</strong> </label>
                        <input id={"id " + this.state.itmId} type="text" onChange={this.returnNull} value={this.state.itmId} />
                    </div>
                    <div>
                        <label htmlFor={"name " + this.state.itmName} > <strong>Name:</strong> </label>
                        <input id={"name " + this.state.itmName} type="text" onChange={this.changeHandler} value={this.state.itmName} pattern="[0-9]+" />
                        <button id={"d " + this.state.itmId} onClick={this.clickHandler}>delete</button>
                    </div>

                    <hr></hr>
                </form>
            </>
        )
    }
}

export default Item;