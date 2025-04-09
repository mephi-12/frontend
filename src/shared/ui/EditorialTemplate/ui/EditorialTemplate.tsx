import { UnitHeader } from "@shared/ui/UnitHeader"
import { MaterialNode } from "../types"
import { parseMaterials } from "../utils/parseMaterials"
import '../editotial.scss'

export const EditorialTemplate: React.FC<{materials: MaterialNode[]}> = ({ materials }) => {
    const { links, items } = parseMaterials(materials)
    return (
        <div className='unit-container'>
            <UnitHeader />
            <div className='editorial-navigation shadow'>
                <h3>Навигация по странице</h3>
                {links}
            </div>
            <div className="editorial-content shadow">
                {items}
            </div>
        </div>
  )
}
