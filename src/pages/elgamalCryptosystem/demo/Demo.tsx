import { UnitHeader } from "@shared/ui/UnitHeader"
import { useCryptosystemState } from "./useCryptosystemState"
import './styles.scss'
import { ElgamalCryptosistem } from "@shared/api/elgamalCryptosystem/types"
import { subscript, superscriptDigit } from "@shared/utils/symbols"
import { Plot } from "@shared/ui/Plot"

const up = superscriptDigit
const bot = subscript

const Step1 = ({prime, generator, secretKey, publicKey}: ElgamalCryptosistem) => {
    return (
        <div className='block'>
            <h3>Шаг 1. Генерация ключей.</h3>
            <p>Выбираются простое число P, генератор группы G, секретный ключ X, открытй ключ Y = G{up('x')} mod P</p>
            <Plot>
                <p>P = {prime}</p>
                <p>G = {generator}</p>
                <p>X = {secretKey}</p>
                <p>Y = {generator}{up(secretKey)} mod {prime} = {publicKey}</p>
            </Plot>
            <p>Открытый ключ: (P, G, Y) = ({prime}, {generator}, {publicKey})</p>
        </div>
    )
}

const Step2 = ({ciphertext, generator, publicKey, k, prime, decoded_message}: ElgamalCryptosistem) => {
    return (
        <div className='block'>
            <h3>Шаг 2. Шифрование сообщения.</h3>
            <p>Выбираются случайное число K, вычисляется шифротекст (C{bot(1)}, C{bot(2)}): C{bot(1)} = G{up('k')} mod P, C{bot(2)} = M * Y{up('k')} mod P</p>
            <Plot>
                <p>M = {decoded_message}</p>
                <p>C{bot(1)} = {generator}{up(k)} mod {prime} = {ciphertext.c1}</p>
                <p>C{bot(2)} = {decoded_message} * {publicKey}{up(k)} mod {prime} = {ciphertext.c2}</p>
            </Plot>
        </div>
    )
}

const Step3 = ({s, decoded_message, prime, secretKey, ciphertext}: ElgamalCryptosistem) => {
    return (
        <div className='block'>
            <h3>Шаг 3. Расшифрование.</h3>
            <p>Вычисляется S = C{bot(1)}{up('x')} mod P</p>
            <Plot>
                <p>S = {ciphertext.c1}{up(secretKey)} mod {prime} = {s}</p>
            </Plot>
            <p>Восстанавливается исходное сообщение M = C{bot(2)} * S{up('-1')} mod P</p>
            <Plot>
                <p>M = {ciphertext.c2} * {s}{up('-1')} mod {prime} = {decoded_message}</p>
            </Plot>
        </div>
    )
}


const Demo = () => {
    const { demoState } = useCryptosystemState()
    return (
      <div className='unit-container'>
        <UnitHeader />
        <div className='demo-content shadow'>
            {demoState && <Step1 {...demoState} />}
            {demoState && <Step2 {...demoState} />}
            {demoState && <Step3 {...demoState} />}
        </div>
      </div>
    )
}

export default Demo
