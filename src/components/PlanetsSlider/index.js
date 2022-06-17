import {Component} from 'react'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import './index.css'

// const {planetsList} = this.props
class PlanetsSlider extends Component {
  render() {
    const {planetsList} = this.props
    const settings = {
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <div testid="planets" className="slider-container">
        <Slider {...settings}>
          {planetsList.map(eachUser => (
            <PlanetItem planetsDetails={eachUser} key={eachUser.id} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default PlanetsSlider
