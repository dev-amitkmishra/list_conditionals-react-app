import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.eventHandle} defaultValue={props.name} />
        </div>
    )
}

export default UserInput;