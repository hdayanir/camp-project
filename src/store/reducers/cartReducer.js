import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) { //burasi gonderdigimiz aksiyona gore sepetin son hali
    switch (type) {
        case ADD_TO_CART:
            //sepette varsa adedi bir arttir , eger sepette o urun yoksa sifirdan ekle
            let product = state.cartItems.find(c => c.product.id === payload.id)
            //bizim referans degistirmemiz lazim 'push' sepetin yani 'cartItems'in referansini degistirmiyor.
            // ve bundan dolayi bir deger guncelleme sorunu yasaniyor.
            //state.cartItems.push({quantity:1 ,product:product})
            if (product) { //urun varsa
                product.quantity++;
                return {
                    ...state //burada referans yenilemis oluyoruz. Bu bir obje  
                }
            } else {//sepette o urun yoksa
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }]
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.product.id === payload.id)//esit olanlari filtreleyecek ve 
                //yeni bir array olusturacak. silinmesini istedigimiz haric diger sepette olan urunler listelenecek 
                //yani silme islemi filtreleme islemi ile gerceklesmis olacak 
            }

        default:
            return state;
    }
}