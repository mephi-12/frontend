import '../styles.scss'

export const Plot = ({children}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
    return (
        <div className='plot plot-vertical'>
            {children}
        </div>
    )
}
