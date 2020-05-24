import React, { Component } from "react";
import "./tour.scss";
export class index extends Component {
  state = {
    showInfo: false,
  };
  render() {
    const { img, id, city, name, info } = this.props.tour;
    const { removeTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={name} />
          <span>
            <i
              className="fas fa-window-close close-btn"
              onClick={() => removeTour(id)}
            ></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span>
              <i
                className="fa fa-caret-square-o-down"
                onClick={() =>
                  this.setState({ showInfo: !this.state.showInfo })
                }
              />
            </span>
          </h5>
          <p>{info}</p>
        </div>
      </article>
    );
  }
}

export default index;
