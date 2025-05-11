import './styles.scss'
import denis from '@shared/assests/denis.png'
import gosha from '@shared/assests/gosha.png'
import victor from '@shared/assests/victor.png'

const About = () => {
  return (
    <div className='off'>
      <h1>(Poo) developers:</h1>
      <div className="imgs">
        <div className='img'><img src={gosha} /><p>Gosha</p></div>
        <div className='img'><img src={victor} /><p>Victor</p></div>
        <div className='img'><img src={denis} /><p>Denis</p></div>
      </div>
    </div>
  )
}

export default About
