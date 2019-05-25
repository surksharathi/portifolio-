
import React from 'react';
import Project from './project';
import Social from './socialProfile';
import profile from './assets/profile.jpg'


class App extends React.Component {

    state = { toggle: false }

    showMore = () => this.setState({ toggle: !this.state.toggle })


    render() {

        return (
            <div>
                <img src={profile} alt="profile" className="profile" />
                <h1> Hello!</h1>
                <p> My Name is  Suraksha Rathi .  I am JavaScript Full Stack Developer  </p>
                <p> (ReactJS, NodeJS, Serverless,
                   GraphQL, Flutter)</p>

                {
                    this.state.toggle ? (
                        <div> I love to explore new technologies .
                          <div>
                                <button onClick={this.showMore}>Show Less</button>

                            </div>
                        </div>

                    ) : (
                            <button onClick={this.showMore}>Show More</button>
                        )
                }

                <hr />

                <Project />
                <hr />
                <Social />
            </div>

        )
    }
}



export default App;