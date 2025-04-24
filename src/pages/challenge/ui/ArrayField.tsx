import { subscript } from "@shared/utils/symbols"
import { SimpleField } from "./SimpleField"

export const ArrayField = ({
    onChange,
    data,
    label,
    instance,
}: {
    onChange: (idx: number, value: string) => void,
    label: string,
    data: string[],
    instance: string[]
}) => {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    }}>
        {data.map((item, idx) => (
            <SimpleField
                label={`${label}${subscript(idx)}`}
                valueEditable={item}
                valueInstance={instance[idx]}
                onChange={e => onChange(idx, e)}
            />
        ))}
    </div>
  )
}
