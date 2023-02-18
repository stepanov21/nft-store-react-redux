
export const getTotal = (state: any) => {
  state.totalPrice = state.items.reduce((total: number, item: {price: number}) => {
    return Number((total + item.price).toFixed(14))
  }, 0)
}