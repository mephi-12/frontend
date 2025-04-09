import { UnitHeader } from "@shared/ui/UnitHeader"
import './styles.scss'
import { CryptosystemState, useCryptosystemState } from "./useCryptosystemState"
import { EncodingDigitType, SatchelCryprosystem, SatchelCryptosystemType } from "@shared/api/satchelCryprosystem/types"
import { AnimatedText } from "@shared/ui/AnimatedText"
import { Plot } from "@shared/ui/Plot"
import { subscriptDigit } from "@shared/utils/symbols"
import { Checkbox } from "@shared/ui/Checkbox"
import { NumberInput } from "@shared/ui/NumberInput"

const renderBackPack = (backpack: string[], letter: string) =>
    backpack.map((value, idx) => (
        <AnimatedText.p key={idx} text={`${letter}${subscriptDigit(idx)} = ${value}`} />
    ))

const Step1 = ({state, omega, module}: SatchelCryprosystem) => {
    return (
        <div className='block'>
            <AnimatedText.Scope>
                <AnimatedText.h3 text="Шаг 1. Генерация пары ключей." />
                <AnimatedText.p text="Возьмем R, S, T такие, что R * S = 1 mod T" />
            </AnimatedText.Scope>
            <Plot>
                <AnimatedText.Scope delay={71 * 20}>
                    <AnimatedText.p text={`R = ${omega}`} />
                    <AnimatedText.p text={`S = ${state}`} />
                    <AnimatedText.p text={`T = ${module}`} />
                </AnimatedText.Scope>
            </Plot>
        </div>
    )
}
const Step2 = ({lightBackpack, omega, heavyBackpack}: SatchelCryprosystem) => {
    return (
        <div className='block'>
            <AnimatedText.Scope>
                <AnimatedText.h3 text="Шаг 2. Создание легкого и тяжелого рюкзака." />
                <AnimatedText.p text="Cоставим легкую задачу об укладке рюкзака" />
            </AnimatedText.Scope>
            <Plot>
                <AnimatedText.Scope delay={84 * 20}>
                    {renderBackPack(lightBackpack, 'a')}
                </AnimatedText.Scope>
            </Plot>
            <AnimatedText.p text="На основе легкого рюкзака и R составим трудную задачу об укладке рюкзака. B = A * R." />
            <div className="row gap-15 align-center">
                <Plot>
                    <AnimatedText.Scope>
                        {renderBackPack(lightBackpack, 'a')}
                    </AnimatedText.Scope>
                </Plot>
                <p>* {omega} =</p>
                <Plot>
                    <AnimatedText.Scope>
                        {renderBackPack(heavyBackpack, 'b')}
                    </AnimatedText.Scope>
                </Plot>
            </div>
        </div>
    )
}
const Step3 = ({lightBackpack, decoded_message, encoded_message}: SatchelCryprosystem) => {
    return (
        <div className='block'>
            <AnimatedText.Scope>
                <AnimatedText.h3 text="Шаг 3. Кодирование сообщения." />
                <AnimatedText.p text={`Сообщение M = ${decoded_message} шифруется по формуле C = M * b`} />
            </AnimatedText.Scope>
            <div className="row gap-15 align-center">
                <p>{decoded_message} *</p>
                <Plot>
                    <AnimatedText.Scope>
                        {renderBackPack(lightBackpack, 'a')}
                    </AnimatedText.Scope>
                </Plot>
                <p>= {encoded_message}</p>
            </div>
        </div>
    )
}
const Step4 = ({decoded_message, state, module, encoded_message}: SatchelCryprosystem) => {
    return (
        <div className='block'>
            <AnimatedText.Scope>
                <AnimatedText.h3 text="Шаг 4. Расшифровка сообщения." />
                <AnimatedText.p text="Расшифровываем сообщение по формуле M' = C * S mod T" />
            </AnimatedText.Scope>
            <div className="row gap-15 align-center">
                <Plot><AnimatedText.p text={encoded_message} /></Plot>
                <p>*</p>
                <Plot><AnimatedText.p text={`${state} mod ${module}`} /></Plot>
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
                />
                <Checkbox onClick={(e) => {e.stopPropagation(); onDigitClick(EncodingDigitType.HIGH)}} checked={!isSISType && isHighDigit} label={`В старших разрядах`} />
                <Checkbox onClick={(e) => {e.stopPropagation(); onDigitClick(EncodingDigitType.MIDDLE)}} checked={!isSISType && isMiddleDigit} label={`В средних разрядах`} />
                <Checkbox onClick={(e) => {e.stopPropagation(); onDigitClick(EncodingDigitType.LOW)}} checked={!isSISType && isLowDigit} label={`В младших разрядах`} />
            </div>
        </div>
    )
}

export const Demo = () => {
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