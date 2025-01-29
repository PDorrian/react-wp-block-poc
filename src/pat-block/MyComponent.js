import React, { useState } from 'react';

const MyComponent = ( props ) => {
    const [text, setText] = useState('This is a sample React component.');

    const handleClick = () => {
        setText('The text has been changed!');
    };

    const attr = JSON.parse(props.attributes);

    return (
        <div id="my_comp">
            <h1>Hello, World! {attr.sampleValue}</h1>
            <h2>{attr.sampleValue2}</h2>
            <p>{text}</p>
            <button onClick={handleClick}>Change Text</button>
        </div>
    );
};

export default MyComponent;