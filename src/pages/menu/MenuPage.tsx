import './styles.scss'
import { UnitCard } from '@entity/unit'
import { unitConfigs } from '@shared/config/units'
import { Link } from 'react-router-dom'

const MenuPage = () => {
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
          <Link to={'/challenge'}>
            Тестирование
          </Link>
        </h2>
      </div>
      <div className='tests-container'>
        <h2>
          <Link to={'/results'}>
            Посмотреть результаты
          </Link>
        </h2>
      </div>
    </div>
  )
}

export default MenuPage
