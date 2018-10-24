import React, { Component } from "react";
import "../styles/footer.css";

class Footer extends Component {
  state = {
    socialMedias: [
      {
        name: "Twitter",
        link: "https://twitter.com/drammensacred",
        img: "http://pngimg.com/uploads/twitter/twitter_PNG32.png"
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/Drammensacred",
        img:
          "https://www.freepngimg.com/thumb/facebook/2-2-facebook-free-download-png-thumb.png"
      },
      {
        name: "Pinterest",
        link: "https://no.pinterest.com/soulfullbags/?autologin=true",
        img: "http://pluspng.com/img-png/pinterest-png-open-2000.png"
      }
    ]
  };
  render() {
    /* The constant socialMediaList iterates through the array socialMedias 
        and outputs the properties we want as a template */
    const { socialMedias } = this.state;
    console.log({ socialMedias });
    const socialMediaList = socialMedias.map(media => {
      return (
        <div className="footer" key={media.name}>
          <img className="socialMediaImg" src={media.img} />
          <p>
            <a href={media.link}>{media.name}</a>
          </p>
        </div>
      );
    });
    // returning the templates sequentially
    return (
      <footer className="footer row">
        <div className="col-8 offset-2">
          <span>Følg oss: </span>
          {socialMediaList}
        </div>
      </footer>
    );
  }
}

export default Footer;