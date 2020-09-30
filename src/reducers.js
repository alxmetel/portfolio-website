import { combineReducers } from 'redux';

const initialState = {
  projectsData: {},
  technologiesData: {}
};

const portfolioData = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_PROJECTS_DATA':
      return {
        ...state,
        projectsData: action.data
      }

    case 'STORE_TECH_DATA':
      return {
        ...state,
        technologiesData: action.data
      }
    default:
      return state;
  }
};

export const reducers = combineReducers({
  portfolioData
});