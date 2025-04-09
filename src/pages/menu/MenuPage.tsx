import './styles.scss'
import { AnimatedText } from '@shared/ui/AnimatedText'
import { UnitCard } from '@entity/unit'
import { unitConfigs } from '@shared/config/units'

const MenuPage = () => {
  return (
    <div className='menu-container'>
      <header>
        <AnimatedText.Scope>
          <AnimatedText.h1 interval={50} text='3 семестр. Криптографические методы защиты информации.' />
          <AnimatedText.p className='spoiler' text='Кибервойна уже идет!' />
        </AnimatedText.Scope>
      </header>
      <div className='units'>
        <h2 className='units-text'>Разделы</h2>
        <div className='items'>
          {unitConfigs.map(UnitCard)}
        </div>
      </div>
    </div>
  )
}

export default MenuPage
