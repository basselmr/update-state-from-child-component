import React from "react";
class AddItem extends React.Component {

    render() {
        return (
            <>
                <h1>ADD NEW</h1>
                <form>
                    <label for="newName">New: </label>
                    <input id="newName" type='text' />
                    <button>ADD</button>
                </form>
            </>

        )
    }

}

export default AddItem;