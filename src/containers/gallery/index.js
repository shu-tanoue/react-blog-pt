import React from "react";
import "./style.css";

const data = [
  {
    id: 1,
    name: "Island",
    image: "shu2.jpg"
  },
  {
    id: 2,
    name: "Forest",
    image: "shu2.jpg"
  },
  {
    id: 3,
    name: "Whale",
    image: "shu2.jpg"
  },
  {
    id: 4,
    name: "Mountain",
    image: "shu2.jpg"
  },
  {
    id: 5,
    name: "Boat",
    image: "shu2.jpg"
  },
  {
    id: 6,
    name: "Flowers",
    image: "shu2.jpg"
  },
  {
    id: 7,
    name: "Fire",
    image: "shu2.jpg"
  },
  {
    id: 9,
    name: "Bridge",
    image: "shu2.jpg"
  }
];

// component App
// takes the tiles component
// adds the data
class Gallery extends React.Component {
  render() {
    return (
      <div>
        <Tiles data={data} />
      </div>
    );
  }
}

class Tiles extends React.Component {
  render() {
    // map over data
    // pass data into tile component
    return (
      <div className="tiles">
        {this.props.data.map(data => {
          return <Tile data={data} key={data.id} />;
        })}
      </div>
    );
  }
}

// create tile component
// has open state
// if for state is open

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this._clickHandler = this._clickHandler.bind(this);
  }

  _clickHandler(e) {
    e.preventDefault();
    // switch state on click
    if (this.state.open === false) {
      this.setState({
        open: true
      });
    } else {
      this.setState({
        open: false
      });
    }
  }

  render() {
    // store styles
    let clickStyles = {};
    // once clicked
    if (this.state.open) {
      clickStyles = {
        width: "62vw",
        height: "62vw",
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "0",
        marginTop: "-31vw",
        marginLeft: "-31vw",
        boxShadow: "0 0 40px 5px rgba(0, 0, 0, 0.3)",
        transform: "none",
        zIndex: "100"
      };
      // without click
    } else {
      clickStyles = {
        width: "18vw",
        height: "18vw"
      };
    }
    // attacth
    // click
    // src
    // styles
    // to image

    return (
      <div classNmae="tile_all">
        <div className="tile">
          <img
            onClick={this._clickHandler}
            src={require(`../../blogPostImages/${this.props.data.image}`)}
            style={clickStyles}
          />
        </div>
      </div>
    );
  }
}

export default Gallery;
// update dom with app and data
// ReactDOM.render(<App data={data} />, document.querySelector(".app"));
