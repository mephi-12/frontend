import { UnitHeader } from "@shared/ui/UnitHeader"
import './styles.scss'
import { CryptosystemState, useCryptosystemState } from "./useCryptosystemState"
import { EncodingDigitType, SatchelCryprosystem, SatchelCryptosystemType } from "@shared/api/satchelCryprosystem/types"
import { Plot } from "@shared/ui/Plot"
import { Checkbox } from "@shared/ui/Checkbox"
import { NumberInput } from "@shared/ui/NumberInput"
import { renderBackpack } from "@shared/utils/renderBackpack"

const Step1 = ({state, omega, module}: SatchelCryprosystem) => {
    return (
        <div className='block'>
            <h3>Шаг 1. Генерация пары ключей.</h3>
            <p>Возьмем R, S, T такие, что R * S = 1 mod T</p>
            <Plot>
                <p>R = {omega}</p>
                <p>S = {state}</p>
                <p>T = {module}</p>
            </Plot>
        </div>
    )
}
const Step2 = ({lightBackpack, omega, heavyBackpack}: SatchelCryprosystem) => {
    return (
        <div className='block'>
            <h3>Шаг 2. Создание легкого и тяжелого рюкзака.</h3>
            <p>Cоставим легкую задачу об укладке рюкзака</p>
            <Plot>
                    {renderBackpack(lightBackpack, 'a')}
            </Plot>
            <p>На основе легкого рюкзака и R составим трудную задачу об укладке рюкзака. B = A * R.</p>
            <div className="row gap-15 align-center">
                <Plot>
                        {renderBackpack(lightBackpack, 'a')}
                </Plot>
                <p>* {omega} =</p>
                <Plot>
                    {renderBackpack(heavyBackpack, 'b')}
                </Plot>
            </div>
        </div>
    )
}
const Step3 = ({lightBackpack, decoded_message, encoded_message}: SatchelCryprosystem) => {
    return (
        <div className='block'>
                <h3>Шаг 3. Кодирование сообщения.</h3>
                <p>Сообщение M = {decoded_message} шифруется по формуле C = M * b</p>
            <div className="row gap-15 align-center">
                <p>{decoded_message} *</p>
                <Plot>
                    {renderBackpack(lightBackpack, 'a')}
                </Plot>
                <p>= {encoded_message}</p>
            </div>
        </div>
    )
}
const Step4 = ({decoded_message, state, module, encoded_message}: SatchelCryprosystem) => {
    return (
        <div className='block'>
            <h3>Шаг 4. Расшифровка сообщения.</h3>
            <p>Расшифровываем сообщение по формуле M' = C * S mod T</p>
            <div className="row gap-15 align-center">
                <Plot><p>{encoded_message}</p></Plot>
                <p>*</p>
                <Plot><p>{state} mod {module}</p></Plot>
                <p>= {decoded_message}</p>
            </div>
        </div>
    )
}

const Options = ({type, encoding_digit, encoding_power, setOptions}: CryptosystemState['demoOptions']) => {
    const isSISType = type === SatchelCryptosystemType.SIS
    const isLowDigit = encoding_digit === EncodingDigitType.LOW
    const isMiddleDigit = encoding_digit === EncodingDigitType.MIDDLE
    const isHighDigit = encoding_digit === EncodingDigitType.HIGH
    const onFieldClick = (t: SatchelCryptosystemType) => {
        if (t === SatchelCryptosystemType.POWER) {
            setOptions({
                type: SatchelCryptosystemType.POWER,
                encoding_digit: encoding_digit ?? EncodingDigitType.LOW,
                encoding_power: encoding_power ?? '3',
            })
        } else {
            setOptions({
                type: SatchelCryptosystemType.SIS,
            })
        }
    }
    const setPower = (power: string) => {
        setOptions(prev => ({...prev, encoding_power: power}))
    }
    const onDigitClick = (d: EncodingDigitType) => {
        setOptions(prev => ({...prev, type: SatchelCryptosystemType.POWER, encoding_digit: d}))
    }
    
    return (
        <div className='options'>
            <div className="field" onClick={(e) => {e.stopPropagation(); onFieldClick(SatchelCryptosystemType.SIS)}}>
                <Checkbox checked={isSISType} label="Супервозрастающая последовательность" />
            </div>
            <div className="field column gap-10" onClick={(e) => {e.stopPropagation(); onFieldClick(SatchelCryptosystemType.POWER)}}>
                <NumberInput
                    className='power'
                    value={encoding_power}
                    onChange={e => setPower(e.target.value)}
                    label="Кодирование в степенях числа"
                />
                <Checkbox onClick={(e) => {e.stopPropagation(); onDigitClick(EncodingDigitType.HIGH)}} checked={!isSISType && isHighDigit} label={`В старших разрядах`} />
                <Checkbox onClick={(e) => {e.stopPropagation(); onDigitClick(EncodingDigitType.MIDDLE)}} checked={!isSISType && isMiddleDigit} label={`В средних разрядах`} />
                <Checkbox onClick={(e) => {e.stopPropagation(); onDigitClick(EncodingDigitType.LOW)}} checked={!isSISType && isLowDigit} label={`В младших разрядах`} />
            </div>
        </div>
    )
}

const Demo = () => {
    const { demoOptions, demoState } = useCryptosystemState()
    return (
      <div className='unit-container'>
        <UnitHeader />
        <div className='demo-content shadow'>
            <Options {...demoOptions} />
            {demoState && <Step1 {...demoState} />}
            {demoState && <Step2 {...demoState} />}
            {demoState && <Step3 {...demoState} />}
            {demoState && <Step4 {...demoState} />}
        </div>
      </div>
    )
}

export default Demo
