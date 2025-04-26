import './styles.scss'
import { AnimatedText } from '@shared/ui/AnimatedText'
import { UnitCard } from '@entity/unit'
import { unitConfigs } from '@shared/config/units'
import { challengeApi } from '@shared/api/challenge'
import { use } from '@shared/utils/use'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

const formatDate = (date: string) => dayjs(date).format('DD-MM HH:mm')

const MenuPage = () => {

  const challenges = use(challengeApi.getChallehges)

  return (
    <div className='menu-container'>
      <header>
          <h1>Криптографические методы защиты информации.</h1>
      </header>
      <div className='units'>
        <h2 className='units-text'>Разделы</h2>
        <div className='items'>
          {unitConfigs.map((unit) => <UnitCard {...unit} />)}
        </div>
      </div>
      <div className='tests-container'>
        <h2>
          Тестирование
        </h2>
        <ul className='items'>
          {challenges && challenges.map(({name, tasksCount, dateEnd, dateStart, id}) => (
            <Link to={`/challenge/${id}`} className='item'>
              <h3 className='sec' style={{width: '250px'}}>{name}</h3>
              <p className='sec'>{formatDate(dateStart)} - {formatDate(dateEnd)}</p>
              <p className='sec'>{tasksCount} задач(-и)</p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MenuPage
