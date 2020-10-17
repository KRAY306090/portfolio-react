import React from "react";


function Project(props) {
    return (
        <div className="card project-box">
            <img className="card-img-top" src={ `images/${props.image}` }></img>
            <div className="card-body blue">
                <h5 className="card-title blue">{props.name}</h5>
                <a href={props.github}><i className="blue fab fa-github fa-lg  mr-md-5 mr-3 fa-2x"> </i></a>
                <a href={props.deployed}><i className="blue fas fa-external-link-alt fa-2x"></i></a>
            </div>

        </div>
    );
}

export default Project;