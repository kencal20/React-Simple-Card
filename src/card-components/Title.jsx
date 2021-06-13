import React from 'react';

const Title = (props) => {
    return (
        <div className="title">
            <h2>
                {props.head}
            </h2>
        </div>
    );
}

export default Title;
