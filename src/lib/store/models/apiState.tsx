export const startApi = () => ({
  requesting: false,
  error: ''
})

export const completeApi = (err?: string) => ({
  requesting: false,
  error: err ? err : ''
})
