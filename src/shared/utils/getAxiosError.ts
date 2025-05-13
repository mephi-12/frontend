export function getAxiosError(error: any) {
    if (!error) return 'Unknown error'
    if (error.response) {
      const { data, status, statusText } = error.response
      if (typeof data === 'object' && data !== null) {
        return (
          data.message ||
          data.error?.message ||
          data.errorDescription?.ru ||
          data.errorDescription?.en ||
          data.status ||
          statusText ||
          `HTTP Error ${status}`
        )
      }
      
      return data || statusText || `HTTP Error ${status}`
    }
    if (error.request) {
      return error.message || 'No response received from server'
    }
    return error.message || 'Unknown error occurred'
}
