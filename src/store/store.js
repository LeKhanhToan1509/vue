import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state: {
        user: null,
        cart: [],
        products: [],
    },
    mutations: {
        loginUser(state, payload) {
            state.user = payload;
        },
        logoutUser(state) {
            state.user = null;
        },
        addToCart(state, payload) {
            if (state.cart.length != 0) {
                let item = state.cart.find((item) => item._id === payload._id);

                if (item) {
                    if (item.size === payload.size) {
                        if (item.quantity < 10) {
                            item.quantity += payload.quantity;
                        } else if (item.quantity >= 10) {
                            item.quantity = 10;
                        }
                    } else {
                        console.log("different size");
                        state.cart = [...state.cart, payload];
                    }
                } else {
                    state.cart = [...state.cart, payload];
                }
            } else {
                state.cart = [...state.cart, payload];
            }
        },
        deleteItem(state, payload) {
            let index = state.cart.indexOf(payload);
            state.cart.splice(index, 1);
        },
        updateQuantity(state, payload) {
            if (payload.quantity > 0) {
                let item = state.cart.find(
                    (item) =>
                        item._id === payload._id && item.size === payload.size
                );
                item.quantity = payload.quantity;
            }
        },
        emptyCart(state) {
            state.cart = [];
        },
        setProducts(state, payload) {
            state.products = payload;
        },
    },
    actions: {
        set_user(context, payload) {
            context.commit("loginUser", payload);
        },
        remove_user(context) {
            context.commit("logoutUser");
        },
        add_to_cart(context, payload) {
            context.commit("addToCart", payload);
        },
        delete_item(context, payload) {
            context.commit("deleteItem", payload);
        },
        update_quantity(context, payload) {
            context.commit("updateQuantity", payload);
        },
        clear_cart(context) {
            context.commit("emptyCart");
        },
        set_products(context, payload) {
            context.commit("setProducts", payload);
        },
    },
    getters: {
        subtotal: (state) => {
            let subtotal = 0;
            state.cart.forEach((item) => {
                subtotal += item.price * item.quantity;
            });
            return subtotal;
        },
        getHash: (state) => {
            var md5 = require("blueimp-md5/js/md5");
            var hash = md5(state.user.email);
            return `https://www.gravatar.com/avatar/` + hash + `?d=mp`;
        },
    },
    plugins: [createPersistedState()],
});

export default store;
