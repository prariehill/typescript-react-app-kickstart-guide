import {ActionsUnion, createAction} from '@martin_hotell/rex-tils';
import {createSelector} from 'reselect';

import {ApplicationState} from '..';
import {Employee} from '../../../Domain/Employee';
import {employees} from '../../../Domain/mockData';
import {selectors as CompanySelectors} from './CompaniesStore';

export interface EmployeeState {
  readonly rawApiData: ReadonlyArray<Employee>;
}

const initialState: EmployeeState = {
  rawApiData: employees,
};

export enum ActionTypes {
  FETCH_EMPLOYEES = '@@salt-solutions/Data/Employees/FETCH_EMPLOYEES',
}

export const actions = {
  fetchEmployees: () => createAction(ActionTypes.FETCH_EMPLOYEES),
};

type EmployeesAction = ActionsUnion<typeof actions>;

export function reducer(state: EmployeeState = initialState, action: EmployeesAction): EmployeeState {
  switch (action.type) {
    case ActionTypes.FETCH_EMPLOYEES:
    default:
      return state;
  }
}

const rawDataSelector = (state: ApplicationState) => state.Data.Employees.rawApiData;

const employeesSelector = createSelector(
  rawDataSelector,
  CompanySelectors.selectedCompanyId,
  (allEmployees, selectedCompanyId) => allEmployees.filter(employee => employee.companyId === selectedCompanyId)
);

export const selectors = {
  employees: employeesSelector,
};
