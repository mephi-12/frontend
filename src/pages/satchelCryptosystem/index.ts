import { lazy } from 'react'
export { Demo as SathcelCryptosystemDemo } from './demo/Demo'

export const SathcelCryptosystemCommon = lazy(() => import('./Common'))
export const SathcelCryptosystemEditorial = lazy(() => import('./Editorial'))
