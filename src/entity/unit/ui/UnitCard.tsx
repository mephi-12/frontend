import { UnitConfig, urlByUnitName } from '@shared/config/units'
import './styles.scss'
import { Link } from 'react-router-dom'
import { useAnnotation } from '@shared/utils/useAnnotation'

export const UnitCard: React.FC<UnitConfig> = ({
  title,
  author,
  name
}) => {
  const description = useAnnotation(name)
  return (
    <Link to={urlByUnitName(name)} key={name}>
      <section className='card-container hover-shadow'>
        <div className='head'>
          <h1>{title}</h1>
        </div>
        <div className='tags'>
          <p className='tag'>{author}</p>
        </div>
        <p className='description'>{description}</p>
      </section>
    </Link>
  )
}
