import React, { useState } from 'react';

const MyComponent = ( props ) => {
    const [text, setText] = useState('This is a sample React component.');

    const handleClick = () => {
        setText('The text has been changed!');
    };

    return (
        <div id="my_comp">
            <h1>Hello, World! {props.sampleValue}</h1>
            <p>{text}</p>
            <button onClick={handleClick}>Change Text</button>
        </div>
    );
};

export default MyComponent;