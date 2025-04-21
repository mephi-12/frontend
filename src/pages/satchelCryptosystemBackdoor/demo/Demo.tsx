import { SatchelCryprosystemBackdoor } from "@shared/api/satchelCryprosystemBackdoor/types"
import { UnitHeader } from "@shared/ui/UnitHeader"
import './styles.scss'
import { Plot } from "@shared/ui/Plot"
import { useBackdoorState } from "./useBackdoorState"
import { renderBackpack } from "@shared/utils/renderBackpack"
import { subscript, superscriptDigit } from "@shared/utils/symbols"

const Step1 = ({attackerKey: {omega, module, state}, keys, magicNumber}: SatchelCryprosystemBackdoor) => {
    return (
        <div className='block'>
            <h3>Шаг 1. Формирование ключей.</h3>
            <p>Злоумышленник формирует публичный и приватный ключи</p>
            <Plot>
                <p>PK{subscript('w')} = ({state}, {module})</p>
                <p>SK{subscript('w')} = {omega}</p>
            </Plot>
            <p>Получатель формирует публичный и приватный ключи, причем работает «зараженная» программа генерации ключей</p>
            <div className="row align-center gap-15">
                <Plot>
                    <p>R = {keys.omega}</p>
                    <p>S = {keys.state}</p>
                    <p>T = {keys.module}</p>
                </Plot>
                <p>{"=>"}</p>
                <Plot>
                    <p>{keys.omega}{superscriptDigit(Number(state))} mod {module} = {magicNumber.omega}</p>
                    <p>{keys.state}{superscriptDigit(Number(state))} mod {module} = {magicNumber.state}</p>
                </Plot>
            </div>
        </div>
    )
}

const Step2 = ({lightBackpack, heavyBackpack, keys}: SatchelCryprosystemBackdoor) => {
    return (
        <div className='block'>
            <h3>Шаг 2. Формирование задачи об укладке рюкзака.</h3>
            <p>Cоставляется легкая задача об укладке рюкзака</p>
            <Plot>
                {renderBackpack(lightBackpack, 'a')}
            </Plot>
            <p>Cоставляется трудная задача об укладке рюкзака</p>
            <div className="row gap-15 align-center">
                <Plot>
                    {renderBackpack(lightBackpack, 'a')}
                </Plot>
                <p>* {keys.omega} mod {keys.module} = </p>
                <Plot>
                    {renderBackpack(heavyBackpack, 'b')}
                </Plot>
            </div>
        </div>
    )
}

const Step3 = ({heavyBackpack, encoded_message, decoded_message}: SatchelCryprosystemBackdoor) => {
    return (
        <div className='block'>
            <h3>Шаг 3. Шифрование сообщения.</h3>
            <p>Сообщение M = {decoded_message} шифруется по формуле C = M * b</p>
            <div className="row gap-15 align-center">
                <p>{decoded_message} *</p>
                <Plot>
                    {renderBackpack(heavyBackpack, 'b')}
                </Plot>
                <p>= {encoded_message}</p>
            </div>
        </div>
    )
}

const Step4 = ({
    attackerKey: {omega, module},
    magicNumber,
    keys,
    encoded_message,
    decoded_message_ten_full,
    decoded_message_ten,
    decoded_message
}: SatchelCryprosystemBackdoor) => {
    return (
        <div className='block'>
            <h3>Шаг 4. Взлом.</h3>
            <p>Вычисляются секретные ключи получателя</p>
            <Plot>
                <p>R = {magicNumber.omega}{superscriptDigit(Number(omega))} mod {module} = {keys.omega}</p>
                <p>S = {magicNumber.state}{superscriptDigit(Number(omega))} mod {module} = {keys.state}</p>
                <p>T = R * S - 1 = {keys.module} </p>
            </Plot>
            <p>По секретному ключу злоумышленние восстынавливает сообщение</p>
            <Plot>
                <p>{encoded_message} * {keys.state} = {decoded_message_ten_full} mod {keys.module}</p>
                <p>M = {decoded_message_ten}{subscript(2)} = {decoded_message}</p>
            </Plot>
        </div>
    )
}

const Demo = () => {
    const { demoState } = useBackdoorState()
    return (
      <div className='unit-container'>
        <UnitHeader />
        <div className='demo-content shadow'>
            {demoState && <Step1 {...demoState} />}
            {demoState && <Step2 {...demoState} />}
            {demoState && <Step3 {...demoState} />}
            {demoState && <Step4 {...demoState} />}
        </div>
      </div>
    )
}

export default Demo
