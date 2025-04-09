const waitFor = <T>(condition: () => T | null | undefined) => new Promise<T>((resolve) => {
    const interval = setInterval(() => {
        const result = condition()
        if (result) {
            clearInterval(interval)
            resolve(result)
        }
    }, 0)
})

export const getScopeDelay = async (scopeName: string) => {
    const element = await waitFor(() => document.querySelector(`#${scopeName}`))
    return Number(element.getAttribute('data-reduced-delay') ?? 0)
}