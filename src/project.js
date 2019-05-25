

import Project from './data/project';


import React from 'react';


class Product extends React.Component {



    render() {
        const { title, discription, image, link } = this.props.project;

        return (
            <div style={{ display: 'inline-block', padding: 5 }}>
                <h3>{title}</h3>
                <img src={image} alt="profile"
                    style={{ width: 100, height: 100 }} />
                <p>{discription}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Projects extends React.Component {

    render() {

        return (

            <div>
                <h2>Highlighted Project</h2>
                {
                    Project.map((PROJECT) => {

                        return (
                            <Product key={PROJECT.id} project={PROJECT} />
                        )
                    })
                }
            </div>
        )
    }

}

export default Projects;