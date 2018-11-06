export const startApi = () => ({
  requesting: true,
  error: ''
})

export const completeApi = (err?: string) => ({
  requesting: false,
  error: err ? err : ''
})
