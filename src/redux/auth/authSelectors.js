export const getError = state => state.auth.error;
export const getIsAuthenticated = state => Boolean(state.auth.token);
export const getUserEmail = state => state.auth.user.email;
export const getUserBalance = state => state.auth.user.balance;
