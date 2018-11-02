export const startApi = () => ({
  requesting: false,
  error: ''
})

export const endApi = (err?: string) => ({
  requesting: false,
  error: err ? err : ''
})
