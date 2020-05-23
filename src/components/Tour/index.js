import React, { Component } from "react";

export class index extends Component {
  render() {
    const { img, id, city, name, info } = this.props.tour;
    const { removeTouur } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} alt={name} />
          <span>
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span>
              <i class="fas fa-carrot-sqaure-down"></i>
            </span>
          </h5>
          <p>{info}</p>
        </div>
      </article>
    );
  }
}

export default index;
