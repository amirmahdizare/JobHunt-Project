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
  cooperationsList: [],
  states: [],
  statesList: [],
  statesListCopy: [],
  page: 1,
  paginationSize: 30,
  numberOfEntities: 0
};

const JobReducer = (state = initialState, action) => {
  switch (action.type) {

    case (ActionTypes.ON_JOB_CHANGE): {

      const { prop, value } = action.payload

      return {
        ...state,
        [prop]: value
      }
    }

    case (ActionTypes.ON_GET_JOBS): {

      var industries = [];

      var specialisms = [];

      var { jobs, numberOfEntities } = action.payload

      for (var i = 0; i < jobs.length; i++) {
        jobs[i]?.industry_job && industries.push({ name: jobs[i].industry_job });
        for (var j = 0; j < jobs[i]?.tags?.length; j++) {
          const SpecialismsIndex = specialisms.findIndex(m => m.name == jobs[i]?.tags[j]);
          if (SpecialismsIndex == -1) {
            specialisms.push({
              name: jobs[i]?.tags[j],
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
        specialismListCopy: specialisms,
        numberOfEntities: numberOfEntities
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

      const { prop, value } = action.payload;

      var allFiltersCopy = [...state.allFilters];
      var filterIndex = allFiltersCopy.findIndex(m => m.field == prop);

      if (filterIndex == -1 && value) {
        allFiltersCopy.push({
          field: prop,
          value
        })
      }
      else if (filterIndex !== -1 && !value) {
        allFiltersCopy.splice(filterIndex, 1);
      }
      else {
        allFiltersCopy[filterIndex].value = value
      }

      return {
        ...state,
        [prop]: value,
        allFilters: allFiltersCopy
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
        [field]: field == 'searchKeyword' ? '' : specificFilter,
        allFilters: allFiltersCopy
      }
    }

    case (ActionTypes.ON_FILTER_JOBS): {

      var { jobs, status, numberOfEntities } = action.payload;

      var jobsList = status == 'nextPage' ? [...state.jobs] : [];
      var industries = status == 'nextPage' ? [] : [...state.industriesList];
      var specialisms = status == 'nextPage' ? [] : [...state.specialismList];

      jobsList.push(...jobs);

      if (status == 'nextPage') {
        for (var i = 0; i < jobsList.length; i++) {
          jobsList[i]?.industry_job && industries.push({ name: jobsList[i].industry_job });
          for (var j = 0; j < jobsList[i]?.tags?.length; j++) {
            const SpecialismsIndex = specialisms.findIndex(m => m.name == jobsList[i]?.tags[j]);
            if (SpecialismsIndex == -1) {
              specialisms.push({
                name: jobsList[i]?.tags[j],
                number: 1
              })
            }
            else {
              specialisms[SpecialismsIndex].number += 1
            }
          }
        }
      }

      return {
        ...state,
        jobs: jobsList,
        industriesList: industries,
        specialismList: specialisms,
        specialismListCopy: specialisms,
        page: status == 'nextPage' ? state.page : 1,
        numberOfEntities
      }
    }

    case (ActionTypes.ON_GET_CHINA_STATES): {

      const statesList = action.payload;

      return {
        ...state,
        statesList,
        statesListCopy: statesList,
      }
    }

    case (ActionTypes.SET_QUERY_SEARCH): {

      const { prop, prop2, value } = action.payload;
      const values = value.split(',');
      var allFilters = [...state.allFilters];
      var specificFilter = [];

      for (var i = 0; i < values.length; i++) {
        allFilters.push(
          {
            field: prop,
            value: state[prop2].filter(m => m.id == values[i])[0].name
          }
        );
        specificFilter.push(state[prop2].filter(m => m.id == values[i])[0].name);
      }

      return {
        ...state,
        allFilters,
        [prop]: specificFilter
      }
    }

    case (ActionTypes.NEXT_PAGE): {

      return {
        ...state,
        page: state.page + 1
      }
    }

    case (ActionTypes.CHANGE_PAGINATION): {

      return {
        ...state,
        paginationSize: action.payload
      }
    }

    default:
      return state;
  }

};

export { JobReducer as default };
