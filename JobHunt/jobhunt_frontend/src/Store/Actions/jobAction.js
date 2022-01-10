import {
    ON_GET_JOBS,
    ON_SET_FILTER,
    ON_GET_CATEGORIES,
    SEARCH_IN_FILTERS,
    SET_SEARCH,
    REMOVE_FILTER,
    ON_GET_COOPERATION,
    ON_FILTER_JOBS,
    ON_GET_CHINA_STATES,
    SET_QUERY_SEARCH,
    NEXT_PAGE,
    CHANGE_PAGINATION,
    ON_JOB_CHANGE
} from './types';
import { getAllJobs, getAllCategories, getAllCorporations, getChinaStates } from "../../api/public"
import { filterDate } from '../../components'

export const onJobChange = (prop, value) => async (
    dispatch
) => {
    dispatch({
        type: ON_JOB_CHANGE, payload: { prop, value }
    })
}

export const getJobs = () => async (
    dispatch, getState
) => {
    getAllJobs(1, getState().JobReducer?.paginationSize).then((data) => dispatch({
        type: ON_GET_JOBS, payload: { jobs: data.entities, numberOfEntities: data.number_of_entities }
    }))
}

export const setFilter = (prop, value) => async (
    dispatch, getState
) => {
    dispatch({
        type: ON_SET_FILTER, payload: { prop, value }
    });

    setTimeout(() => {
        filterJobs('')(dispatch, getState)
    }, 200);
}

export const filterJobs = (nextPage) => async (
    dispatch, getState
) => {

    var queryFilter = '';
    var fieldIndex = 0;
    var jobTypeIndex = -1;
    var jobTypeFieldIndex = -1;
    var specialismsIndex = -1;
    var specialismsFieldIndex = -1;
    var categoriesIndex = -1;
    var categoriesFieldIndex = -1;
    var careerIndex = -1;
    var careerFieldIndex = -1;
    var industryIndex = -1;
    var industryFieldIndex = -1;
    var qualificationIndex = -1;
    var qualificationFieldIndex = -1;
    var datePostedIndex = -1;
    var datePostedFieldIndex = -1;
    var statesIndex = -1;
    var statesFieldIndex = -1;

    for (var i = 0; i < getState().JobReducer.allFilters.length; i++) {

        if (getState().JobReducer?.allFilters[i]?.field == 'jobType') {
            const jobTypeId = getState().JobReducer?.cooperationsList?.filter(m => m.name == getState().JobReducer?.allFilters[i]?.value)[0]?.id;
            if (jobTypeIndex == -1) {
                jobTypeFieldIndex = fieldIndex
                queryFilter += `&filters[${fieldIndex}][field]=cooperation_kind_id&filters[${fieldIndex}][value][${jobTypeIndex + 1}]=${jobTypeId}&filters[${fieldIndex}][command]=inArr`
                fieldIndex += 1
            } else {
                queryFilter += `&filters[${jobTypeFieldIndex}][value][${jobTypeIndex + 1}]=${jobTypeId}`
            }
            jobTypeIndex += 1
        }
        else if (getState().JobReducer?.allFilters[i]?.field == 'specialism') {
            if (specialismsIndex == -1) {
                specialismsFieldIndex = fieldIndex
                queryFilter += `&filters[${fieldIndex}][field]=tags&filters[${fieldIndex}][value][${specialismsIndex + 1}]=${getState().JobReducer?.allFilters[i]?.value}&filters[${fieldIndex}][command]=inArr`
                fieldIndex += 1
            } else {
                queryFilter += `&filters[${specialismsFieldIndex}][value][${specialismsIndex + 1}]=${getState().JobReducer?.allFilters[i]?.value}`
            }
            specialismsIndex += 1
        }
        else if (getState().JobReducer?.allFilters[i]?.field == 'categories') {
            const categoryId = getState().JobReducer?.categoriesList?.filter(m => m.name == getState().JobReducer?.allFilters[i]?.value)[0]?.id;
            if (categoriesIndex == -1) {
                categoriesFieldIndex = fieldIndex
                queryFilter += `&filters[${fieldIndex}][field]=category_id&filters[${fieldIndex}][value][${categoriesIndex + 1}]=${categoryId}&filters[${fieldIndex}][command]=inArr`
                fieldIndex += 1
            } else {
                queryFilter += `&filters[${categoriesFieldIndex}][value][${categoriesIndex + 1}]=${categoryId}`
            }
            categoriesIndex += 1
        }
        else if (getState().JobReducer?.allFilters[i]?.field == 'careerLevel') {
            if (careerIndex == -1) {
                careerFieldIndex = fieldIndex
                queryFilter += `&filters[${fieldIndex}][field]=career_job&filters[${fieldIndex}][value][${careerIndex + 1}]=${getState().JobReducer?.allFilters[i]?.value}&filters[${fieldIndex}][command]=inArr`
                fieldIndex += 1
            } else {
                queryFilter += `&filters[${careerFieldIndex}][value][${careerIndex + 1}]=${getState().JobReducer?.allFilters[i]?.value}`
            }
            careerIndex += 1
        }
        else if (getState().JobReducer?.allFilters[i]?.field == 'industry') {
            if (industryIndex == -1) {
                industryFieldIndex = fieldIndex
                queryFilter += `&filters[${fieldIndex}][field]=industry_job&filters[${fieldIndex}][value][${industryIndex + 1}]=${getState().JobReducer?.allFilters[i]?.value}&filters[${fieldIndex}][command]=inArr`
                fieldIndex += 1
            } else {
                queryFilter += `&filters[${industryFieldIndex}][value][${industryIndex + 1}]=${getState().JobReducer?.allFilters[i]?.value}`
            }
            industryIndex += 1
        }
        else if (getState().JobReducer?.allFilters[i]?.field == 'qualification') {
            if (qualificationIndex == -1) {
                qualificationFieldIndex = fieldIndex
                queryFilter += `&filters[${fieldIndex}][field]=qualification&filters[${fieldIndex}][value][${qualificationIndex + 1}]=${getState().JobReducer?.allFilters[i]?.value}&filters[${fieldIndex}][command]=inArr`
                fieldIndex += 1
            } else {
                queryFilter += `&filters[${qualificationFieldIndex}][value][${qualificationIndex + 1}]=${getState().JobReducer?.allFilters[i]?.value}`
            }
            qualificationIndex += 1
        }
        else if (getState().JobReducer?.allFilters[i]?.field == 'searchKeyword') {
            queryFilter += `&filters[${fieldIndex}][field]=title.en&filters[${fieldIndex}][value]=${`%${getState().JobReducer?.allFilters[i]?.value}%`}&filters[${fieldIndex}][operator]=like`
            fieldIndex += 1
        }
        else if (getState().JobReducer?.allFilters[i]?.field == 'datePosted') {

            if (datePostedIndex == -1) {
                queryFilter += `&filters[${fieldIndex}][field]=created_at&filters[${fieldIndex}][value]=${filterDate(getState().JobReducer?.allFilters[i]?.value)}&filters[${fieldIndex}][operator]=>`
            } else {
                queryFilter += `&filters[${fieldIndex}][field]=created_at&filters[${fieldIndex}][value]=${filterDate(getState().JobReducer?.allFilters[i]?.value)}&filters[${fieldIndex}][operator]=>&filters[${datePostedFieldIndex}][command]=or`
            }
            datePostedFieldIndex = fieldIndex;
            datePostedIndex += 1;
            fieldIndex += 1
        }
        else if (getState().JobReducer?.allFilters[i]?.field == 'states') {
            const stateId = getState().JobReducer?.statesList?.filter(m => m.name == getState().JobReducer?.allFilters[i]?.value)[0]?.id;
            if (statesIndex == -1) {
                statesFieldIndex = fieldIndex
                queryFilter += `&filters[${fieldIndex}][field]=state_id&filters[${fieldIndex}][value][${statesIndex + 1}]=${stateId}&filters[${fieldIndex}][command]=inArr`
                fieldIndex += 1
            } else {
                queryFilter += `&filters[${statesFieldIndex}][value][${statesIndex + 1}]=${stateId}`
            }
            statesIndex += 1
        }
    }

    getAllJobs(nextPage ? getState().JobReducer?.page : 1, getState().JobReducer?.paginationSize, queryFilter).then((data) => dispatch({
        type: ON_FILTER_JOBS, payload: { jobs: data.entities, status: nextPage, numberOfEntities: data.number_of_entities }
    }))
}

export const getCategories = () => async (
    dispatch
) => {
    return getAllCategories().then((data) => {
        dispatch({
            type: ON_GET_CATEGORIES, payload: data
        })
        return data;
    }
    )
}

export const getCooperation = () => async (
    dispatch
) => {
    getAllCorporations().then((data) => dispatch({
        type: ON_GET_COOPERATION, payload: data
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
    dispatch, getState
) => {
    dispatch({
        type: SET_SEARCH, payload: { prop, value }
    })
    setTimeout(() => {
        filterJobs('')(dispatch, getState)
    }, 200);
}

export const removeFilter = (data) => async (
    dispatch, getState
) => {
    dispatch({
        type: REMOVE_FILTER, payload: data
    })
    setTimeout(() => {
        filterJobs('')(dispatch, getState)
    }, 200);
}

export const onGetChinaStates = () => async (
    dispatch
) => {
    return getChinaStates().then((data) => {
        dispatch({
            type: ON_GET_CHINA_STATES, payload: data
        })
        return data
    }
    )
}

export const setQuerySearch = (prop, prop2, value) => async (
    dispatch, getState
) => {
    dispatch({
        type: SET_QUERY_SEARCH, payload: { prop, prop2, value }
    })
    setTimeout(() => {
        filterJobs('')(dispatch, getState)
    }, 200);
}

export const nextPage = () => async (
    dispatch, getState
) => {
    dispatch({
        type: NEXT_PAGE
    })
    setTimeout(() => {
        filterJobs('nextPage')(dispatch, getState)
    }, 200);
}

export const changePagination = (value) => async (
    dispatch, getState
) => {
    dispatch({
        type: CHANGE_PAGINATION, payload: value
    })
    setTimeout(() => {
        filterJobs('')(dispatch, getState)
    }, 200);
}