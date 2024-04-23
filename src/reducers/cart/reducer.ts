import { OrderFormData } from '../../pages/cart'
import { ActionTypes } from './actions'
export interface CartItemData {
  coffeeId: number
  amount: number
}

export interface OrderData extends OrderFormData {
  id: number
}

export type CartCoffeeFunction = (id: number) => void

export type CartCoffeeAddFunction = (id: number, amount: number) => void

export type OrderFunction = (
  shoppingInfo: OrderFormData,
  coffees: CartItemData[],
  callback: (route: string) => void,
) => void

interface CartStateData {
  cart: CartItemData[]
  orders: OrderData[]
}

export function cartReducer(
  state: CartStateData,
  action: {
    type: keyof typeof ActionTypes
    payload: {
      id?: number
      amount?: number
      order?: { shoppingForm: OrderFormData; coffees: CartItemData[] }
      callback?: (routes: string) => void
    }
  },
) {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART:
      if (action.payload.id) {
        if (
          state.cart.find((coffee) => coffee.coffeeId === action.payload.id)
        ) {
          return {
            ...state,
            cart: state.cart.map((coffee) => {
              if (coffee.coffeeId === action.payload.id) {
                return {
                  ...coffee,
                  amount:
                    coffee.amount +
                    (action.payload.amount ? action.payload.amount : 1),
                }
              }
              return coffee
            }),
          }
        } else {
          return {
            ...state,
            cart: [
              ...state.cart,
              {
                coffeeId: action.payload.id,
                amount: action.payload.amount ? action.payload.amount : 1,
              },
            ],
          }
        }
      }
      return state
    case ActionTypes.REMOVE_COFFEE_FROM_CART:
      if (action.payload.id) {
        return {
          ...state,
          cart: state.cart.filter(
            (coffee) => coffee.coffeeId !== action.payload.id,
          ),
        }
      }

      return state
    case ActionTypes.INCREASE_CART_COFFEE:
      if (action.payload.id) {
        return {
          ...state,
          cart: state.cart.map((coffee) => {
            if (coffee.coffeeId === action.payload.id) {
              return { ...coffee, amount: coffee.amount + 1 }
            }
            return coffee
          }),
        }
      }

      return state
    case ActionTypes.DECREASE_CART_COFFEE:
      if (action.payload.id) {
        return {
          ...state,
          cart: state.cart.map((coffee) => {
            if (coffee.coffeeId === action.payload.id) {
              const updatedAmount =
                coffee.amount - 1 < 1 ? 1 : coffee.amount - 1
              return { ...coffee, amount: updatedAmount }
            }
            return coffee
          }),
        }
      }

      return state
    case ActionTypes.CREATE_NEW_ORDER:
      if (action.payload.order) {
        const newOrder = {
          ...action.payload.order.shoppingForm,
          id: new Date().getTime(),
          coffees: action.payload.order.coffees,
        }

        if (action.payload.callback) {
          action.payload.callback(`/order/${newOrder.id}`)
        }

        return {
          ...state,
          orders: [...state.orders, newOrder],
        }
      }

      return state
    case ActionTypes.RESET_CART:
      return {
        ...state,
        cart: [],
      }
    default:
      return state
  }
}
