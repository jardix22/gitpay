import { combineReducers } from 'redux'
import {
  FETCH_USER_ACCOUNT_REQUESTED,
  FETCH_USER_ACCOUNT_SUCCESS,
  FETCH_USER_ACCOUNT_ERROR,
  CREATE_USER_ACCOUNT_REQUESTED,
  CREATE_USER_ACCOUNT_SUCCESS,
  CREATE_USER_ACCOUNT_ERROR,
  UPDATE_USER_ACCOUNT_REQUESTED,
  UPDATE_USER_ACCOUNT_SUCCESS,
  UPDATE_USER_ACCOUNT_ERROR,
  GET_BANKACCOUNT_REQUESTED,
  GET_BANKACCOUNT_SUCCESS,
  GET_BANKACCOUNT_ERROR,
  CREATE_BANKACCOUNT_REQUESTED,
  CREATE_BANKACCOUNT_SUCCESS,
  CREATE_BANKACCOUNT_ERROR,
} from '../actions/userActions'

import {
  CREATE_TASK_REQUESTED,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_ERROR,
  UPDATE_TASK_REQUESTED,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
  FETCH_TASK_REQUESTED,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_ERROR,
  LIST_TASK_REQUESTED,
  LIST_TASK_SUCCESS,
  LIST_TASK_ERROR,
  FILTER_TASK_REQUESTED,
  FILTER_TASK_SUCCESS,
  PAYMENT_TASK_REQUESTED,
  PAYMENT_TASK_SUCCESS,
  PAYMENT_TASK_ERROR,
  SYNC_TASK_REQUESTED,
  SYNC_TASK_SUCCESS,
  SYNC_TASK_ERROR,
  CHANGE_TASK_TAB
} from '../actions/taskActions'

import {
  ADD_NOTIFICATION,
  CLOSE_NOTIFICATION,
  ADD_DIALOG,
  CLOSE_DIALOG,
} from '../actions/notificationActions'

import {
  LOGGED_IN_REQUESTED,
  LOGGED_IN_SUCCESS,
  LOGGED_IN_ERROR,
  LOGOUT_REQUESTED,
  LOGOUT_COMPLETED
} from '../actions/loginActions'

import {
  ASSIGN_TASK_REQUESTED,
  ASSIGN_TASK_SUCCESS,
  ASSIGN_TASK_ERROR
} from '../actions/assignActions'

const notification = (state = { open: false }, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return { ...state, text: action.text, open: true }
    case CLOSE_NOTIFICATION:
      return { ...state, open: false }
    default:
      return state
  }
}

const dialog = (state = { open: false }, action) => {
  switch (action.type) {
    case ADD_DIALOG:
      return { ...state, open: action.dialog }
    case CLOSE_DIALOG:
      return { ...state, open: action.dialog }
    default:
      return state
  }
}

const loggedIn = (state = { logged: false, user: {}, completed: true, error: {} }, action) => {
  switch (action.type) {
    case LOGGED_IN_SUCCESS:
      return { ...state, logged: action.logged, user: action.user, completed: action.completed }
    case LOGGED_IN_ERROR:
      return { ...state, logged: action.logged, completed: action.completed, error: action.error }
    case LOGGED_IN_REQUESTED:
      return { ...state, logged: action.logged, completed: action.completed }
    case LOGOUT_REQUESTED:
    case LOGOUT_COMPLETED:
      return { ...state, logged: action.logged, completed: action.completed }
    default:
      return state
  }
}

const account = (state = { data: { }, completed: true, error: {} }, action) => {
  switch (action.type) {
    case FETCH_USER_ACCOUNT_REQUESTED:
      return { ...state, completed: false }
    case FETCH_USER_ACCOUNT_ERROR:
      return { ...state, completed: true, error: action.error }
    case FETCH_USER_ACCOUNT_SUCCESS:
      return { ...state, completed: true, data: action.data, error: {} }
    case CREATE_USER_ACCOUNT_REQUESTED:
      return { ...state, completed: false }
    case CREATE_USER_ACCOUNT_SUCCESS:
      return { ...state, completed: true, data: action.data, error: {} }
    case CREATE_USER_ACCOUNT_ERROR:
      return { ...state, completed: true, error: action.error }
    case UPDATE_USER_ACCOUNT_REQUESTED:
      return { ...state, completed: false }
    case UPDATE_USER_ACCOUNT_SUCCESS:
      return { ...state, completed: true, data: action.data, error: {} }
    case UPDATE_USER_ACCOUNT_ERROR:
      return { ...state, completed: true, error: action.error }
    default:
      return state
  }
}

const bankAccount = (state = { data: { }, completed: true, error: {} }, action) => {
  switch (action.type) {
    case GET_BANKACCOUNT_REQUESTED:
      return { ...state, completed: false }
    case GET_BANKACCOUNT_SUCCESS:
      return { ...state, completed: true, data: action.data, error: {} }
    case GET_BANKACCOUNT_ERROR:
      return { ...state, completed: true, error: action.error }
    case CREATE_BANKACCOUNT_REQUESTED:
      return { ...state, completed: false }
    case CREATE_BANKACCOUNT_SUCCESS:
      return { ...state, completed: true, data: action.data, error: {} }
    case CREATE_BANKACCOUNT_ERROR:
      return { ...state, completed: true, error: action.error }
    default:
      return state
  }
}

const task = (state = {
  completed: true,
  values: {
    available: 0,
    failed: 0,
    pending: 0
  },
  error: {
    message: false
  },
  tab: 0,
  data: {
    value: 0,
    orders: [],
    assigns: [],
    url: '',
    metadata: {
      company: '',
      issue: {
        state: 'open',
        body: '',
        user: {
          avatar_url: 'https://loading.io/spinners/disqus/index.discuss-messesage-preloader.svg'
        }
      }
    }
  }
}, action) => {
  switch (action.type) {
    case CREATE_TASK_REQUESTED:
      return { ...state, completed: false }
    case CREATE_TASK_SUCCESS:
      return { ...state, completed: true }
    case CREATE_TASK_ERROR:
      return { ...state, completed: true, error: action.error }
    case UPDATE_TASK_REQUESTED:
      return { ...state, completed: false }
    case UPDATE_TASK_SUCCESS:
      return { ...state, completed: true }
    case UPDATE_TASK_ERROR:
      return { ...state, completed: true, error: action.error }
    case CHANGE_TASK_TAB:
      return { ...state, tab: action.tab }
    case ASSIGN_TASK_REQUESTED:
      return { ...state, completed: false }
    case ASSIGN_TASK_SUCCESS:
      return { ...state, completed: true, tab: action.tab }
    case ASSIGN_TASK_ERROR:
      return { ...state, completed: true, error: action.error }
    case FETCH_TASK_REQUESTED:
      return { ...state, completed: false }
    case FETCH_TASK_SUCCESS:
      return { ...state, completed: true, data: action.data }
    case FETCH_TASK_ERROR:
      return { ...state, completed: true, error: action.error }
    case SYNC_TASK_REQUESTED:
      return { ...state, completed: false }
    case SYNC_TASK_SUCCESS:
      return { ...state, completed: true, values: action.values.value }
    case SYNC_TASK_ERROR:
      return { ...state, completed: true, error: action.error }
    case PAYMENT_TASK_REQUESTED:
      return { ...state, completed: false }
    case PAYMENT_TASK_SUCCESS:
      return { ...state, completed: true }
    case PAYMENT_TASK_ERROR:
      return { ...state, completed: true, error: action.error }
    default:
      return state
  }
}

const tasks = (state = {
  completed: true,
  error: {
    message: false
  },
  data: [],
  filterType: 'all'
}, action) => {
  switch (action.type) {
    case LIST_TASK_REQUESTED:
      return { ...state, completed: false }
    case LIST_TASK_SUCCESS:
      return { ...state, completed: true, data: action.data, filterType: 'all' }
    case LIST_TASK_ERROR:
      return { ...state, completed: true, error: action.error }
    case FILTER_TASK_REQUESTED:
      return { ...state, completed: false }
    case FILTER_TASK_SUCCESS:
      return { ...state, completed: true, data: action.data, filterType: action.filterType }
    default:
      return state
  }
}

const reducers = combineReducers({
  notification,
  dialog,
  loggedIn,
  account,
  bankAccount,
  task,
  tasks
})

export default reducers
