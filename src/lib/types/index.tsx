export interface IRootState {
  mockData: {
    data: string,
    api: {
      requesting: boolean,
      error: string
    }
  }
}
