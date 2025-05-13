import './styles.scss'
import denis from '@shared/assests/denis.png'
import gosha from '@shared/assests/gosha.png'
import victor from '@shared/assests/victor.png'

const About = () => {
  return (
    <div className='off'>
      <h1>Разработчики:</h1>
      <div className="imgs">
        <div className='img'><img src={gosha} /><p>Георгий Анохин</p></div>
        <div className='img'><img src={victor} /><p>Виктор Кокрев</p></div>
        <div className='img'><img src={denis} /><p>Денис Георгиев</p></div>
      </div>
    </div>
  )
}

export default About
