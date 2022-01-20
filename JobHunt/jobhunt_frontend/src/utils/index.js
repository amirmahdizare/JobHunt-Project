import React from "react"
const getServiceId = () => {
  return window.sessionStorage.getItem('serviceId')
}
const getLanguage = () => {
  return window.sessionStorage.getItem('Lang') || 'en'
}
const storeToken = (token) => {
  window.sessionStorage.setItem('token', token)
}
const getToken = () => {
  return 'Bearer ' + window.sessionStorage.getItem('token')
}
const storeUsertoken = () => {
  localStorage.setItem('userToken', window.sessionStorage.getItem('token'))
}

const getUserToken = () => {
  return localStorage.getItem('userToken')
}
const removeTokens = () => {
  localStorage.removeItem('userToken')
  window.sessionStorage.removeItem('token')
}
const centralApiHeaderObj = () => {
  return {
    'Service-ID': getServiceId(),
    Lang: getLanguage(),
  }
}
const capitalizeFirstLetter = (word) => {
  return word[0].toUpperCase() + word.substr(1)
}

const storeUser = (user) => {
  return window.sessionStorage.setItem('user', user)
}

const getUser = () => {
  return window.sessionStorage.getItem('user') || null
}
const getCurrency = (currency) => {
  const currencies = [
    {
      value: 'USD',
      label: <i class="la la-usd" />,
    },
    {
      value: 'EUR',
      label: <i class="la la-eur" />,
    },
    {
      value: 'cny',
      label: <i class="la la-cny" />
    },
  ];
  if (currency) {
    for (const curr of currencies) {
      if (curr.value.toUpperCase == currency?.toUpperCase)
        return curr.label
    }
  }
  return currency
}

const makeSearchQueryString = (filters) => {
  var qs = ""
  filters.forEach((filter, index) => {
    if (filter?.field) {
      qs += `&filters[${index}][field]=${filter.field}`
      ///if value is array
      if (typeof filter.value == 'object') {
        filter.value.forEach((val,i) => qs += `&filters[${index}][value][${i}]=${val}`)
      }
      //if value us string
      else
        qs += `&filters[${index}][value]=${filter.value}`
      if (filter?.command)
        qs += `&filters[${index}][command]=${filter.command}`
      if (filter?.operator)
        qs += `&filters[${index}][operator]=${filter.operator}`
    }


  })
  if(qs[0]=='&')
  return qs.substring(1)
}

export { getServiceId, getLanguage, storeToken, getToken, centralApiHeaderObj, storeUsertoken, getUserToken, capitalizeFirstLetter, storeUser, getUser, removeTokens, getCurrency,makeSearchQueryString }