const INIT_STATE = {
    carts: []
}

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":

            const iteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);
            console.log(iteamIndex);
            if (iteamIndex >= 0) {
                state.carts[iteamIndex].qnty += 1
            } else {
                const temp = { ...action.payload, anty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case "RMV_CART":
            const data = state.carts.filter((el) => el.id !== action.payload);
            return {
                ...state,
                carts: data
            }

        case "RMV_ONE":
            const iteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (state.carts[iteamIndex_dec].qnty >= 1) {
                const dltitem = state.carts[iteamIndex_dec].qnty -= 1
                console.log([...state.carts, dltitem]);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[iteamIndex_dec].qnty === 1) {
                const data = state.carts.filter((el) => el.id !== action.payload);
                return {
                    ...state,
                    carts: data
                }

            }

        default:
            return state
    }
}