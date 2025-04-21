import { Unit, UnitConfig, UnitName } from "./types"

export const unitConfigs: UnitConfig[] = [
    {
        name: Unit['satchel_cryptosystem'],
        author: 'Иванов М.А.',
        title: 'Ранцевая криптосистема'
    },
    {
        name: Unit['satchel_cryptosystem_backdoor'],
        author: 'Иванов М.А.',
        title: 'Бекдор в ранцевой криптосистеме'
    },
    {
        name: Unit['elgamal_cryptosystem'],
        author: 'Иванов М.А.',
        title: 'Криптосистема Эльгамаля'
    }
] as const

export const unitByName = (nameToCompare: UnitName) => unitConfigs.find(({ name }) => name === nameToCompare)!
export const urlByUnitName =
    (
        unitName: UnitName,
        page: 'common' | 'editorial' | 'demo' = 'common'
    ) => `/${unitName}/${page}`

export * from './types'
