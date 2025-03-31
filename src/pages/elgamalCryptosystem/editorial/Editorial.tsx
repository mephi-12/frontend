import { RFC } from '@shared/types/component'
import materials from './materials.json'
import { createEditorial } from '@shared/utils/createEditorial/createEditorial'
import { root } from '../config'

export const Editorial: RFC = () => {
  return createEditorial(materials)
}

Editorial.url = root + '/editorial'
