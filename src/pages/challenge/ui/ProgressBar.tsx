type Props = {
    progress: number
    total: number
    labels: string[]
}

export const ProgressBar = ({ progress, total, labels }: Props) => {
    const percentage = Math.min(100, Math.max(0, (progress / total) * 100))
    
    return (
        <div style={{ width: '100%' }}>
            <div style={{
                width: '100%',
                height: '20px',
                backgroundColor: '#e0e0e0',
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative',
            }} className="shadow">
                <div style={{
                    width: `${percentage}%`,
                    height: '100%',
                    backgroundColor: '#4caf50',
                    borderRadius: '10px',
                    transition: 'width 0.3s ease',
                }} />
            </div>

            {labels.length > 0 && (
                <div style={{ 
                    position: 'relative',
                    marginTop: '8px',
                    height: '20px',
                    width: '70%',
                    margin: '8px auto 0 auto'
                }}>
                    {labels.map((label, index) => {
                        const positionPercentage = labels.length > 1 
                            ? (index / (labels.length - 1)) * 100 
                            : 50
                        
                        return (
                            <div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    left: `${positionPercentage}%`,
                                    transform: 'translateX(-50%)',
                                    fontSize: '12px',
                                    color: '#666',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {label}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}