import { createSlice, current } from '@reduxjs/toolkit'
import utils from '../Utils/utils';
const initialState = {
    user: utils.getLocalData('user'),
}
export const userStore = createSlice({
    name: 'user',
    initialState,
    reducers: {
        actionLogin: (state, action) => {
            const userInfo = action.payload;
            utils.updateLocalData('user', userInfo);
            state.user = userInfo;
        },
        actionLogout: (state, action) => {
            utils.updateLocalData('user', null);
            state.user = null;
        }
    },
})

// Action creators are generated for each case reducer function
export const { actionLogin, actionLogout } = userStore.actions

export default userStore.reducer