import { RFC } from '@shared/types/component'
import { root } from '../config'
import materials from './materials.json'
import { createEditorial } from '@shared/utils/createEditorial/createEditorial'

export const Editorial: RFC = () => {
  return createEditorial(materials)
}

Editorial.url = root + '/editorial'
