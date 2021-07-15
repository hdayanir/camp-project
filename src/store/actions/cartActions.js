export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_FROM_CART="REMOVE_FROM_CART"

export function addToCart(product){
    return{ //aksiyonun tipini ve veriyi istiyor
        type : ADD_TO_CART, //gonderilen aksiyon
        payload : product //o an state gondermek istedigimiz deger , yani urun 
    }
}

export function removeFromCart(product){
    return{ //aksiyonun tipini ve veriyi istiyor
        type : REMOVE_FROM_CART, 
        payload : product 
    }
}