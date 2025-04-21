import { UnitName } from "@shared/config/units";
import { MaterialNode } from "@shared/ui/EditorialTemplate";
import { useEffect, useState } from "react";

export const useAnnotation = (unitName: UnitName) => {
    const [annotation, setAnnotation] = useState('')
    useEffect(() => {
        const loadMaterials = async () => {
            const materials: MaterialNode[] = (await import(`@shared/materials/${unitName}_editorial.json`)).default
            let newAnnotation = ''
            for (const node of materials) {
                if (node.annotation) {
                    newAnnotation = node.text
                }
            }
            setAnnotation(newAnnotation)
        }
        loadMaterials()
    }, [])
    return annotation
}
