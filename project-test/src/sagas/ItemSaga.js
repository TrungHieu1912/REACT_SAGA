import { put, takeEvery } from 'redux-saga/effects'
import getItems from '../fetchAPIs/getItems'
import addItem from '../fetchAPIs/addItem'
import updateAPI from '../fetchAPIs/updateAPI'
import deleteAPI from '../fetchAPIs/deleteAPI'
import searchAPI from '../fetchAPIs/searchAPI'
import * as types from '../contants'
function* getListItem(action) {
    try {
        const res = yield getItems();
        yield put({
            type: types.GET_ITEM_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.GET_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function* addItemSaga(action) {
    try {
        yield addItem(action.payload);
        yield put({
            type: types.ADD_ITEM_SUCCESS
        })
        yield put({
            type: types.GET_ITEM_REQUEST
        })
    } catch (error) {
        yield put({
            type: types.ADD_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}


function* updateItemSaga(action) {
    try {
        yield updateAPI(action.payload);
        yield put({
            type: types.UPDATE_ITEM_SUCCESS
        })
        yield put({
            type: types.GET_ITEM_REQUEST
        })
    } catch (error) {
        yield put({
            type: types.UPDATE_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* deleteItemSaga(action) {
    try {
        yield deleteAPI(action.payload);
        yield put({
            type: types.DELETE_ITEM_SUCCESS
        })
        yield put({
            type: types.GET_ITEM_REQUEST
        })
    } catch (error) {
        yield put({
            type: types.DELETE_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}
function* searchItemSaga(action) {
    try {
        const res = yield searchAPI(action.payload);
        yield put({
            type: types.SEARCH_ITEM_SUCCESS,
            payload: res
        })
    } catch (error) {
        yield put({
            type: types.SEARCH_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}


export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getListItem),
    takeEvery(types.ADD_ITEM_REQUEST, addItemSaga),
    takeEvery(types.UPDATE_ITEM_REQUEST, updateItemSaga),
    takeEvery(types.DELETE_ITEM_REQUEST, deleteItemSaga),
    takeEvery(types.SEARCH_ITEM_REQUEST, searchItemSaga)
];