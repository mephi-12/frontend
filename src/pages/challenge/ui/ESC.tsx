import { ElgamalCryptosistemTask } from '@shared/api/elgamalCryptosystem/types'
import { useState } from 'react'
import { SimpleField } from './SimpleField'
import { useLog } from '@shared/utils/useLog'
import { submit } from '../models/submit'

export const ESC = ({ task: {data, id} }: { task: ElgamalCryptosistemTask }) => {
  const [state, setState] = useState(data)
  useLog(state)
  return (
    <>
      <h2>Криптосистема Эль-Гамаля</h2>
      <p>Заполните параметры для работы с криптосистемой Эль-Гамаля.</p>
      <br />
      
      <div className="data">
        <h3>{'>'} Параметры системы</h3>
        <SimpleField
          label="Простое число (p)"
          valueInstance={data.prime}
          valueEditable={state.prime}
          onChange={v => setState(prev => ({ ...prev, prime: v }))}
        />
        <SimpleField
          label="Генератор (g)"
          valueInstance={data.generator}
          valueEditable={state.generator}
          onChange={v => setState(prev => ({ ...prev, generator: v }))}
        />
        <br />
        <h3>{'>'} Ключи</h3>
        <SimpleField
          label="Закрытый ключ (x)"
          valueInstance={data.secretKey}
          valueEditable={state.secretKey}
          onChange={v => setState(prev => ({ ...prev, secretKey: v }))}
        />
        <SimpleField
          label="Открытый ключ (y)"
          valueInstance={data.publicKey}
          valueEditable={state.publicKey}
          onChange={v => setState(prev => ({ ...prev, publicKey: v }))}
        />
        <br />
        <h3>{'>'} Параметры шифрования</h3>
        <SimpleField
          label="Секретный параметр (k)"
          valueInstance={data.k}
          valueEditable={state.k}
          onChange={v => setState(prev => ({ ...prev, k: v }))}
        />
        <SimpleField
          label="Параметр (s)"
          valueInstance={data.s}
          valueEditable={state.s}
          onChange={v => setState(prev => ({ ...prev, s: v }))}
        />
        <br />
        <h3>{'>'} Шифротекст</h3>
        <SimpleField
          label="C1"
          valueInstance={data.ciphertext?.c1}
          valueEditable={state.ciphertext?.c1}
          onChange={v => setState(p => ({...p, ciphertext: {...p.ciphertext, c1: v}}))}
        />
        <SimpleField
          label="C2"
          valueInstance={data.ciphertext?.c2}
          valueEditable={state.ciphertext?.c2}
          onChange={v => setState(p => ({...p, ciphertext: {...p.ciphertext, c2: v}}))}
        />
        <br />
        <h3>{'>'} Сообщение</h3>
        <SimpleField
          label="Исходное сообщение"
          valueInstance={data.decoded_message}
          valueEditable={state.decoded_message}
          onChange={v => setState(prev => ({ ...prev, decoded_message: v }))}
        />
        <br />
        <div className="btn-check">
          <button onClick={() => submit(id, state)}>Проверить</button>
        </div>
      </div>
    </>
  )
}