import types from "./action_types";

// ACTION CREATORS
export const addTransaction = (transaction) =>
{
    return {
        type: types.ADD_TRANSACTION,
        payload: transaction,
    };
}