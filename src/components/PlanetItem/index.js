import './index.css'

const PlanetItem = props => {
  const {planetsDetails} = props
  const {imageUrl, name, description} = planetsDetails

  return (
    <div className="container">
      <h1 className="heading">PLANETS</h1>
      <img src={imageUrl} alt={'planet {name}'} className="image-style" />
      <h1 className="paragraph">{name}</h1>
      <p className="paragraph text-center">{description}</p>
    </div>
  )
}

export default PlanetItem
