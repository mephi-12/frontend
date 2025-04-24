import { SatchelCryprosystemBackdoorBase, SatchelCryprosystemBackdoorTask } from '@shared/api/satchelCryprosystemBackdoor/types'
import React, { useState } from 'react'
import { SimpleField } from './SimpleField'
import { ArrayField } from './ArrayField'
import { useLog } from "@shared/utils/useLog"

export const BSC = ({ task: {data} }: { task: SatchelCryprosystemBackdoorTask }) => {
  const [state, setState] = useState<Partial<SatchelCryprosystemBackdoorBase>>(data)
  return (
    <>
      <h2>Бекдор в ранцевую криптосистему</h2>
      <p>Восстановите параметры для взлома ранцевой криптосистемы.</p>
      <br />
      
      <div className="data">
        <h3> {'>'} Публичный ключ злоумышленника</h3>
        <SimpleField
          label="Модуль (T)"
          valueInstance={data.attackerKey.module}
          valueEditable={state.attackerKey.module}
          onChange={v => setState(p => ({...p, attackerKey: {...p.attackerKey, module: v}}))}
        />
        <SimpleField
          label="Омега (R)"
          valueInstance={data.attackerKey.omega}
          valueEditable={state.attackerKey.omega}
          onChange={v => setState(p => ({...p, attackerKey: {...p.attackerKey, omega: v}}))}
        />
        <SimpleField
          label="Основание (S)"
          valueInstance={data.attackerKey.state}
          valueEditable={state.attackerKey.state}
          onChange={v => setState(p => ({...p, attackerKey: {...p.attackerKey, state: v}}))}
        />
        <br />
        <h3> {'>'} Параметры преобразования</h3>
        <SimpleField
          label="Омега (R)"
          valueInstance={data.keys.omega}
          valueEditable={state.keys.omega}
          onChange={v => setState(p => ({...p, keys: {...p.keys, omega: v}}))}
        />
        <SimpleField
          label="Основание (S)"
          valueInstance={data.keys.state}
          valueEditable={state.keys.state}
          onChange={v => setState(p => ({...p, keys: {...p.keys, state: v}}))}
        />
        <SimpleField
          label="Модуль (T)"
          valueInstance={data.keys.module}
          valueEditable={state.keys.module}
          onChange={v => setState(p => ({...p, keys: {...p.keys, module: v}}))}
        />
        <br />
        <h3> {'>'} Магическое число</h3>
        <SimpleField
          label="Омега"
          valueInstance={data.magicNumber.omega}
          valueEditable={state.magicNumber.omega}
          onChange={v => setState(p => ({...p, magicNumber: {...p.magicNumber, omega: v}}))}
        />
        <SimpleField
          label="Основание"
          valueInstance={data.magicNumber.state}
          valueEditable={state.magicNumber.state}
          onChange={v => setState(p => ({...p, magicNumber: {...p.magicNumber, state: v}}))}
        />
        <br />
        <h3> {'>'} СВП (a)</h3>
        <ArrayField
          label="a"
          instance={data.lightBackpack}
          data={state.lightBackpack}
          onChange={(idx, value) => {
            const newArr = [...(state.lightBackpack || [])]
            newArr[idx] = value
            setState(prev => ({ ...prev, lightBackpack: newArr }))
          }}
        />
        <br />
        <h3> {'>'} Публичный ключ (b)</h3>
        <ArrayField
          label="b"
          instance={data.heavyBackpack}
          data={state.heavyBackpack}
          onChange={(idx, value) => {
            const newArr = [...(state.heavyBackpack || [])]
            newArr[idx] = value
            setState(prev => ({ ...prev, heavyBackpack: newArr }))
          }}
        />
        <br />
        <h3> {'>'} Сообщение</h3>
        <SimpleField
          label="Сообщение"
          valueInstance={data.decoded_message}
          valueEditable={state.decoded_message}
          onChange={v => setState(prev => ({ ...prev, decoded_message: v }))}
        />
        <br />
        <div className="btn-check">
          <button>Проверить</button>
        </div>
      </div>
    </>
  )
}