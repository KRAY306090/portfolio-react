import React from "react";

function Project(props) {
    return (
        <div className="card">
            <img class="card-img-top" src={props.image}></img>
            <div class="card-body">
                <h5 className="card-title">{props.name}</h5>
                
                <a href={props.github}>Github</a>
                <a href={props.deployed}>Deployed Application</a>
            </div>

        </div>
    );
}

export default Project;