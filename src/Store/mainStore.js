import { createSlice, current } from '@reduxjs/toolkit'
const initialState = {
    mobileMenuStatus:'',
}
export const mainStore = createSlice({
    name: 'mainStore',
    initialState,
    reducers: {
        actionToggleMenu: (state, action) => {
            const activeClass = 'modal-menu-active';
            if(!state.mobileMenuStatus) {
                state.mobileMenuStatus = activeClass;
            } else {
                state.mobileMenuStatus = '';
            };
        },
    },
})

// Action creators are generated for each case reducer function
export const { actionToggleMenu } = mainStore.actions

export default mainStore.reducer