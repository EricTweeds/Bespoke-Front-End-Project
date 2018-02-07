import { createSelector } from 'reselect';

export const selectRoot = state => state

export const weatherByLocation = () =>
    createSelector([selectRoot], state => state.weatherByLocation)

export const makeSelectedLocation = () => 
    createSelector([selectRoot], state => state.selectedLocation)

export const makeWeather = () => 
    createSelector([selectRoot], state => state.weather)

export const makeIsFetching = () => 
    createSelector([weatherByLocation()], state => state.isFetching)

export const makeLastUpdated = () => 
    createSelector([weatherByLocation()], state => state.lastUpdated)

export const makeEvents = () =>
    createSelector([selectRoot], state => state.events)