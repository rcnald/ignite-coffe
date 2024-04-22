import { ActionTypes } from './actions'

export interface CartItemData {
  coffeeId: number
  amount: number
}

export function cartReducer(
  state: CartItemData[],
  action: {
    type: keyof typeof ActionTypes
    payload: { id: number; amount?: number }
  },
) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART:
      if (state.find((coffee) => coffee.coffeeId === action.payload.id)) {
        return state.map((coffee) => {
          if (coffee.coffeeId === action.payload.id) {
            return {
              ...coffee,
              amount:
                coffee.amount +
                (action.payload.amount ? action.payload.amount : 1),
            }
          }
          return coffee
        })
      } else {
        return [
          ...state,
          {
            coffeeId: action.payload.id,
            amount: action.payload.amount ? action.payload.amount : 1,
          },
        ]
      }
    case ActionTypes.REMOVE_COFFEE_FROM_CART:
      return state.filter((coffee) => coffee.coffeeId !== action.payload.id)
    case ActionTypes.INCREASE_CART_COFFEE:
      return state.map((coffee) => {
        if (coffee.coffeeId === action.payload.id) {
          return { ...coffee, amount: coffee.amount + 1 }
        }
        return coffee
      })
    case ActionTypes.DECREASE_CART_COFFEE:
      return state.map((coffee) => {
        if (coffee.coffeeId === action.payload.id) {
          const updatedAmount = coffee.amount - 1 < 1 ? 1 : coffee.amount - 1
          return { ...coffee, amount: updatedAmount }
        }
        return coffee
      })
    default:
      return state
  }
}
