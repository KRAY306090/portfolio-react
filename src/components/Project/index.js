import React from "react";

function Project(props) {
    return (
        <div className="card m-3">
            <img class="card-img-top" src={props.image}></img>
            <div class="card-body">
                <h5 className="card-title">{props.name}</h5>
                
                <a href={props.github}><i className="fab fa-github fa-lg  mr-md-5 mr-3 fa-2x"> </i></a>
                <a href={props.deployed}><i class="fas fa-external-link-alt fa-2x"></i></a>
            </div>

        </div>
    );
}

export default Project;