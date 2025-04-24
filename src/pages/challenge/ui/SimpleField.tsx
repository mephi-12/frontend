export const SimpleField = ({valueEditable, valueInstance, label, onChange}: {
    valueInstance: string | null | undefined,
    label: string,
    valueEditable: string | null | undefined,
    onChange: (e: string) => void
    
}) => {
    if (valueInstance) {
        return <p>{label}: {valueInstance}</p>
    }
    return (
        <div style={{
            display: 'flex',
            gap: '10px',
            width: '100%'
        }}>
            <label>{label}:</label>
            <input
                value={valueEditable}
                onChange={(e) => onChange(e.target.value)}
                style={{
                    borderTop: 'none',
                    borderRight: 'none',
                    borderLeft: 'none',
                    borderBottom: '2px solid #EEC5FD',
                    outline: 'none',
                    
                }}
            />
        </div>
    )
}
