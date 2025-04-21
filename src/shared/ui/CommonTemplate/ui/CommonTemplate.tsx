import { UnitName, urlByUnitName } from "@shared/config/units"
import { Link } from "react-router-dom"
import { UnitHeader } from "@shared/ui/UnitHeader"
import { useAnnotation } from "@shared/utils/useAnnotation"

export const CommonTemplate: React.FC<{unitName: UnitName}> = ({ unitName }) => {
  const description = useAnnotation(unitName)
  console.log(description)
  return (
    <div className='unit-container'>
      <UnitHeader />
      <div className="content">
        <div className="services tag shadow">
          <Link to={urlByUnitName(unitName, 'editorial')}>Материалы</Link>
          <Link to={urlByUnitName(unitName, 'demo')}>Демо</Link>
        </div>
        <div className="description tag shadow">
          <h3>Аннотация</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
