import {
    ON_GET_JOBS,
    ON_SET_FILTER,
    ON_GET_CATEGORIES,
    SEARCH_IN_FILTERS,
    SET_SEARCH,
    REMOVE_FILTER
} from './types';
import { getAllJobs, getAllCategories } from "../../api/public"

export const getJobs = (page, paginationSize) => async (
    dispatch
) => {
    getAllJobs(page, paginationSize).then((data) => dispatch({
        type: ON_GET_JOBS, payload: data
    }))
}

export const setFilter = (prop, value) => async (
    dispatch
) => {
    dispatch({
        type: ON_SET_FILTER, payload: { prop, value }
    })
}

export const getCategories = () => async (
    dispatch
) => {
    getAllCategories().then((data) => dispatch({
        type: ON_GET_CATEGORIES, payload: data
    }))
}

export const searchInFiltersList = (prop, value) => async (
    dispatch
) => {
    dispatch({
        type: SEARCH_IN_FILTERS, payload: { prop, value }
    })
}

export const setSearch = (prop, value) => async (
    dispatch
) => {
    dispatch({
        type: SET_SEARCH, payload: { prop, value }
    })
}

export const removeFilter = (data) => async (
    dispatch
) => {
    dispatch({
        type: REMOVE_FILTER, payload: data
    })
}
