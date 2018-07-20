// CREDENTIALS LOGIN ACTIONS
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_U2F = 'LOGIN_U2F'
export const LOGIN_FINISH = 'LOGIN_FINISH'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT = 'LOGOUT'

// U2F LOGIN ACTIONS
export const U2F_REQUESTED = 'U2F_REQUESTED'
export const U2F_DEVICE_SUCCESS = 'U2F_DEVICE_SUCCESS'
export const U2F_SEND_CHALLENGE = 'U2F_SEND_CHALLENGE'
export const U2F_SERVER_SUCCESS = 'U2F_SERVER_SUCCESS'
export const U2F_ERROR = 'U2F_ERROR'

// U2F DEVICE MANAGEMENT ACTIONS
export const ADD_U2F_DEVICE = 'ADD_U2F_DEVICE'
export const U2F_DEVICE_CHALLENGE = 'U2F_DEVICE_CHALLENGE'
export const U2F_DEVICE_CHALLENGE_SUCCESS = 'U2F_DEVICE_CHALLENGE_SUCCESS'
export const U2F_DEVICE_REGISTER = 'U2F_DEVICE_REGISTER'
export const U2F_DEVICE_REGISTER_SUCCESS = 'U2F_DEVICE_REGISTER_SUCCESS'
export const U2F_DEVICE_ERROR = 'U2F_DEVICE_ERROR'

// RESOURCES MANAGEMENT
export const GET_APPLICATIONS = 'GET_APPLICATIONS'
export const GET_FIRMWARES = 'GET_FIRMWARES'
export const GET_DEVICES = 'GET_DEVICES'
export const GET_PROVIDERS = 'GET_PROVIDERS'
export const GET_PUBLISHERS = 'GET_PUBLISHERS'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_MCU = 'GET_MCU'
export const GET_ICONS = 'GET_ICONS'
export const RESOURCES_ERROR = 'RESOURCES_ERROR'
export const CREATE_RESOURCE = 'CREATE_RESOURCE'
export const CREATE_RESOURCE_SUCCESS = 'CREATE_RESOURCE_SUCCESS'
export const UPDATE_RESOURCE = 'UPDATE_RESOURCE'
export const UPDATE_RESOURCE_SUCCESS = 'UPDATE_RESOURCE_SUCCESS'
export const DELETE_RESOURCE = 'DELETE_RESOURCE'
export const DELETE_RESOURCE_SUCCESS = 'DELETE_RESOURCE_SUCCESS'
