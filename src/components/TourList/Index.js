import React, { Component } from "react";
import Tour from "../Tour";
import { tourData } from "../../tourData";
const removeTour = (id) => {
  console.log(id);
};
export class Index extends Component {
  state = {
    tours: tourData,
  };

  render() {
    console.log(this.state.tours);
    return (
      <section className="tourlist">
        {this.state.tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
        ))}
      </section>
    );
  }
}

export default Index;
