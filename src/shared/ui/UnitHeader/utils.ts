import { unitByName, UnitName, urlByUnitName } from "@shared/config/units"

const CONSTS = {
    editorial: 'Материалы',
    demo: 'Демо',
    test: 'Тестирование',
} as const

export const getPathParts = (path: string) => {
    const [unit, type] = path.split('/').filter(Boolean)
    const { title, name } = unitByName(unit as UnitName)
    const parts = [{label: 'Разделы', url: '/'}, {label: title, url: urlByUnitName(name)}]
    
    if (type !== 'common') {
        parts.push({label: CONSTS[type], url: `/${name}/${type}`})
    }
    return parts
}