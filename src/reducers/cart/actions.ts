import { OrderFormData } from '../../pages/cart'
import { CartItemData } from './reducer'

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  INCREASE_CART_COFFEE = 'INCREASE_CART_COFFEE',
  DECREASE_CART_COFFEE = 'DECREASE_CART_COFFEE',
  CREATE_NEW_ORDER = 'CREATE_NEW_ORDER',
  RESET_CART = 'RESET_CART',
}

export function addCoffeeToCartAction(id: number, amount: number) {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      id,
      amount,
    },
  }
}

export function removeCoffeeFromCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      id,
    },
  }
}

export function increaseCartCoffeeAction(id: number) {
  return {
    type: ActionTypes.INCREASE_CART_COFFEE,
    payload: {
      id,
    },
  }
}

export function decreaseCartCoffeeAction(id: number) {
  return {
    type: ActionTypes.DECREASE_CART_COFFEE,
    payload: {
      id,
    },
  }
}

export function createNewOrderAction(
  shoppingForm: OrderFormData,
  coffees: CartItemData[],
  callback: (route: string) => void,
) {
  return {
    type: ActionTypes.CREATE_NEW_ORDER,
    payload: {
      order: { shoppingForm, coffees },
      callback,
    },
  }
}

export function resetCartAction() {
  return {
    type: ActionTypes.RESET_CART,
    payload: {},
  }
}
