import React from 'react';

const DynamicPage = ({params}) => {
    console.log(params)
    return (
        <div>
            <h2>this is DynamicPage: {params.id}</h2>
        </div>
    );
};

export default DynamicPage;