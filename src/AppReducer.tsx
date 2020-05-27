import React, { useReducer } from 'react';

interface IProduct {
    id: number;
    name: string;
    price: number;
}

interface ICart {
    products: string[];
    shipping_value?: number;
}

type CartActionType = {
    type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppReducer: React.FC = () => {
    const cart = useReducer(
        (state: ICart, action: CartActionType) =>{
            switch (action.type){
                case 'ADD_PRODUCT':
                    return{
                        ...state,
                        products: [...state.products, 'Produto Novo']
                    }
                default:
                    return state;
            }
        },
        {
            products: ['asd'],
            shipping_value: 0,
        },
    );

    return(
        <div/>
    );
}

export default AppReducer;