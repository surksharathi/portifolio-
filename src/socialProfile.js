
import socalProfile from './data/socialProfile';
import React from 'react';


class Display extends React.Component {

    render() {

        const { image, link } = this.props.profile;
        return (
            <div style={{ display: "inline-block", margin: 10 }}>
                <img src={image} alt="data" style={{ width: 50, height: 30 }} />
                <a href={link}>{link}</a>
            </div>
        )
    }

}



class SocialProfile extends React.Component {



    render() {

        return (
            <div>
                <h3>Social Profile </h3>
                {
                    socalProfile.map((social) => {

                        return (
                            <Display key={social.id} profile={social} />
                        )
                    })
                }
            </div>
        )
    }
}

export default SocialProfile;