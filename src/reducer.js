export const initialState = {
    basket: [],
    user: null
};

//selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);



//reducer how we expect to send/dispatch action to the data layer and pull it

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }

        case "REMOVE_FROM_BASKET":
            //using index to remove items instead of filtering
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0) {
                //if the item is found
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                );
            }
            return { ...state, basket: newBasket }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};
//...state.basket what was contained inthe basket initially & action.item is the newly added item/action
export default reducer;