import { SatchelCryprosystemPower, SatchelCryprosystemTask, SatchelCryptosystemType } from "@shared/api/satchelCryprosystem/types"
import { useState } from "react"
import { SimpleField } from "./SimpleField"
import { useLog } from "@shared/utils/useLog"
import { ArrayField } from "./ArrayField"
import { submit } from "../models/submit"

export const SC = ({task: {data, id}}: {task: SatchelCryprosystemTask}) => {
  const [state, setState] = useState(data)

  const sfieldProps = function<T extends keyof SatchelCryprosystemTask['data']>(
    key: T, label: string
  ) {
    return ({
      valueInstance: data[key],
      valueEditable: state[key],
      onChange: (e: string) => setState(p => ({...p, [key]: e})),
      label
    })
  }
  const afieldProps = function<T extends keyof SatchelCryprosystemTask['data']>(
    key: T, label: string
  ) {
    return ({
      instance: data[key],
      data: state[key],
      label,
      onChange:
        (idx: number, v: string) =>
          setState(p => ({...p, [key]: (p[key] as Array<any>).map((e, i) => i === idx ? v : e)}))
    })
  }

  useLog(state)

  return (
    <>
      <h2>Пример ранцевой криптосистемы.</h2>
      <p>Заполните пропуски так, чтобы получилась правильная криптоситема.</p>
      <br />
      <div className="data">
        {data.type === SatchelCryptosystemType.POWER &&
          // @ts-ignore
          <SimpleField {...sfieldProps('encoding_power', 'Степень кодирования')} />
        }
        {data.type === SatchelCryptosystemType.SIS &&
          <p>Супервозрастающая последовательность</p>
        }
        <SimpleField {...sfieldProps('omega', 'Омега')} />
        <SimpleField {...sfieldProps('state', 'Основание')} />
        <SimpleField {...sfieldProps('module', 'Модуль')} />
        <SimpleField {...sfieldProps('decoded_message', 'Сообщение')} />
        <br />
        <ArrayField {...afieldProps('lightBackpack', 'a')} />
        <br />
        <ArrayField {...afieldProps('heavyBackpack', 'b')} />
        <br />
        <div className="btn-check">
          <button onClick={() => submit(id, state)}>Проверить</button>
        </div>
      </div>
    </>
  )
}
