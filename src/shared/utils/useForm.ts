import { useCallback, useState } from "react"

type FormFieldUtilities<T> = {
  [K in keyof T]: {
    name: K
    value: T[K]
    onChange: (event: React.ChangeEvent<HTMLInputElement> | T[K]) => void
    defaultValue: T[K]
  }
}

type UseFormReturnType<T> = {
  values: T
} & FormFieldUtilities<T>

export const useForm = <T extends Record<string, any>>(initialValues: T): UseFormReturnType<T> => {
  const [values, setValues] = useState<T>(initialValues)

  const createChangeHandler = useCallback(<K extends keyof T>(name: K) => 
    (event: React.ChangeEvent<HTMLInputElement> | T[K]) => {
      let value: T[K]
      if (event && typeof event === 'object' && 'target' in event) {
        value = event.target.value as T[K]
      } else {
        value = event as T[K]
      }
      if (value && value.toString() === '[object Object]') {
        value = '' as T[K]
      }
      setValues(prevValues => ({
        ...prevValues,
        [name]: value
      }))
    }, 
    []
  )

  const formUtilities = {} as FormFieldUtilities<T>

  (Object.keys(initialValues) as Array<keyof T>).forEach((field) => {
    formUtilities[field] = {
      name: field,
      value: values[field],
      onChange: createChangeHandler(field),
      defaultValue: initialValues[field],
    }
  })

  return {
    values,
    ...formUtilities,
  }
}
