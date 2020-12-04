import * as actionTypes from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SELECT_EMPLOYEE:
      return {
        ...state,
        selectedEmployees: action.updatedEmployees,
      };
    case actionTypes.UNSELECT_EMPLOYEE:
      return {
        ...state,
        selectedEmployees: action.updatedEmployees,
      };
    case actionTypes.GET_EMPLOYEES:
      return {
        ...state,
        employeesFetched: action.employees,
      };

    default:
      return state;
  }
};

export default reducer;
