import React from "react";



function Home() {


    function exampleMethod() {
        console.log("JS is Runing");
    }



    return (
        <div>
            <h1>
                My home page
            </h1>
            <p>Some Content</p>
            <buttton onClick={() => exampleMethod()}>click To Console</buttton>
        </div>
    )
};

export default Home;
