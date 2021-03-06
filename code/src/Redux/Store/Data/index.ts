import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';

import * as CompaniesStore from './CompaniesStore';
import * as EmployeesStore from './EmployeesStore';

export interface DataState {
  readonly Companies: CompaniesStore.CompaniesState;
  readonly Employees: EmployeesStore.EmployeeState;
}

export const actions = {
  Companies: CompaniesStore.actions,
  Employees: EmployeesStore.actions,
};

export const selectors = {
  Companies: CompaniesStore.selectors,
  Employees: EmployeesStore.selectors,
};

export const reducer = combineReducers({
  Companies: CompaniesStore.reducer,
  Employees: EmployeesStore.reducer,
});

export const epics = combineEpics(
  CompaniesStore.epics,
);
