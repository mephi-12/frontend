import '../editotial.scss'
import { MaterialNode } from '../types'

const getNavLinks = (materials: MaterialNode[]) => {
    const links: {
        text: string
        anchor: string
        sub?: boolean
    }[] = []

    const rec = (node: MaterialNode) => {
        if (node.anchor) {
            links.push({
                text: node.title || node.subtitle || '',
                anchor: node.anchor,
                sub: !!node.subtitle
            })
            node.childs?.forEach(rec)
        }
    }
    materials.forEach(rec)

    return links.map(({text, anchor, sub}) => sub ?
    (<p key={anchor} className='extra'>- <a href={`#${anchor}`} className='extra'>{text}</a></p>) :
    (<a key={anchor} href={`#${anchor}`}>{text}</a>))
}

const renderNumericList = (list: MaterialNode['numeric_list']) => {
    return (
        <ol>
            {list.map((item, idx) => (
                <li key={idx}><p>{item}</p></li>
            ))}
        </ol>
    )
}

const renderItem = (node: MaterialNode): React.ReactNode => {
    if (node.title) {
        return (
            <div className='block' id={node.anchor}>
                <h3>{node.title}</h3>
                {node.text && <p>{node.text}</p>}
                {node.numeric_list && renderNumericList(node.numeric_list)}
                {node.childs?.map(renderItem)}
            </div>
        )
    }
    if (node.subtitle) {
        return (
            <>
                <h3 id={node.anchor}><span>- {node.subtitle}</span></h3>
                {node.text && <p>{node.text}</p>}
                {node.numeric_list && renderNumericList(node.numeric_list)}
                {node.childs?.map(renderItem)}
            </>
        )
    }
    if (node.text) {
        return (
            <>
                <p>{node.text}</p>
                <>{node.numeric_list && renderNumericList(node.numeric_list)}</>
            </>
        )
    }
    if (node.numeric_list) {
        return (
            <>{renderNumericList(node.numeric_list)}</>
        )
    }
    return <></>
}

export const parseMaterials = (materials: MaterialNode[]) => ({
    links: getNavLinks(materials),
    items: materials.map((item) => renderItem(item))
})