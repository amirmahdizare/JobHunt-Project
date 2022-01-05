import * as ActionTypes from '../Actions/types';

const initialState = {
  jobs: [],
  industriesList: [],
  searchKeyword: '',
  searchLocation: '',
  datePosted: [],
  jobType: [],
  specialism: [],
  offeredSalary: [],
  careerLevel: [],
  experience: [],
  industry: [],
  qualification: [],
  categories: [],
  categoriesList: [],
  specialismList: [],
  categoriesListCopy: [],
  specialismListCopy: [],
  allFilters: [],
  cooperationsList: []
};

const JobReducer = (state = initialState, action) => {
  switch (action.type) {

    case (ActionTypes.ON_GET_JOBS): {

      var industries = [];

      var specialisms = [];

      var jobs = action.payload

      for (var i = 0; i < jobs.entities.length; i++) {
        jobs?.entities[i]?.industry_job && industries.push({ name: jobs.entities[i].industry_job });
        for (var j = 0; j < jobs.entities[i]?.tags?.length; j++) {
          const SpecialismsIndex = specialisms.findIndex(m => m.name == jobs.entities[i]?.tags[j]);
          if (SpecialismsIndex == -1) {
            specialisms.push({
              name: jobs.entities[i]?.tags[j],
              number: 1
            })
          }
          else {
            specialisms[SpecialismsIndex].number += 1
          }
        }
      }

      return {
        ...state,
        jobs,
        industriesList: industries,
        specialismList: specialisms,
        specialismListCopy: specialisms
      }
    }

    case (ActionTypes.ON_SET_FILTER): {

      var { prop, value } = action.payload;
      var specificFilter = [...state[prop]];
      var filterIndex = specificFilter.findIndex(m => m == value);
      var allFiltersCopy = [...state.allFilters];

      if (filterIndex == -1) {
        specificFilter.push(value);
        allFiltersCopy.push({
          field: prop,
          value
        })
      }
      else {
        specificFilter = specificFilter.filter(i => i !== value);
        allFiltersCopy = allFiltersCopy.filter(m => (m.value !== value))
      }

      return {
        ...state,
        [prop]: specificFilter,
        allFilters: allFiltersCopy
      }
    }

    case (ActionTypes.ON_GET_CATEGORIES): {

      const categoriesList = action.payload;

      categoriesList.forEach(function (obj) {
        obj.name = obj.title;
        delete obj.title;
      });

      return {
        ...state,
        categoriesList,
        categoriesListCopy: categoriesList,
      }
    }

    case (ActionTypes.ON_GET_COOPERATION): {

      const cooperationsList = action.payload;

      var corporationsObject = [];
      for (var i in Object.values(cooperationsList)) {

        corporationsObject.push({
          "name": Object.values(cooperationsList)[i],
          "id": Object.keys(cooperationsList)[i],
        });
      }

      return {
        ...state,
        cooperationsList: corporationsObject
      }
    }

    case (ActionTypes.SEARCH_IN_FILTERS): {

      const { prop, value } = action.payload
      var specificFilter = [...state[prop]];
      specificFilter = specificFilter.filter(m => m?.name?.toLowerCase()?.includes(value?.toLowerCase()))

      return {
        ...state,
        [`${prop}Copy`]: specificFilter
      }
    }

    case (ActionTypes.SET_SEARCH): {

      const { prop, value } = action.payload

      return {
        ...state,
        [prop]: value
      }
    }

    case (ActionTypes.REMOVE_FILTER): {

      const { field, value } = action.payload;
      var specificFilter = [...state[field]];
      specificFilter = specificFilter.filter(i => i !== value)

      var allFiltersCopy = [...state.allFilters];
      allFiltersCopy = allFiltersCopy.filter(m => (m.value !== value))

      return {
        ...state,
        [field]: specificFilter,
        allFilters: allFiltersCopy
      }
    }

    case (ActionTypes.ON_FILTER_JOBS): {

      var jobs = action.payload

      return {
        ...state,
        jobs,
      }
    }

    default:
      return state;
  }

};

export { JobReducer as default };

