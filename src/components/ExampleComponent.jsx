import React from 'react';

const ExampleComponent = (props) => {
    return (
        <div className="example-component">
            <h1 className="text-2xl font-bold">{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default ExampleComponent;