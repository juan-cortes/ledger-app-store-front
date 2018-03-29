import * as types from '../../actions/action-types'
import * as actions from '../../actions/resources-actions'
import resourcesReducer, { initialState } from '../resources'

const applications = [
  { name: 'bitcoin', id: 1, application_versions: [{ id: 1 }] },
  { name: 'fido u2f', id: 2, application_versions: [{ id: 3 }] },
]
const firmwares = [
  { name: '1.4.1', id: 28, se_firmware_versions: [{ id: 1 }] },
  { name: '1.3.0', id: 32, se_firmware_versions: [{ id: 3 }] },
]
const devices = [
  { name: 'nano blue', id: 4, device_versions: [{ id: 1 }] },
  { name: 'nano s', id: 12, device_versions: [{ id: 3 }] },
]
const providers = [{ name: '1.4.1', id: 28 }, { name: '1.3.0', id: 32 }]
const publishers = [{ name: 'ledger', id: 28 }, { name: 'amazon', id: 32 }]
const categories = [{ name: 'gaming', id: 28 }, { name: 'finance', id: 32 }]
const mcu = [
  { name: 'mcu', id: 28, mcu_versions: [{ id: 1 }] },
  { name: 'mcu2', id: 32, mcu_versions: [{ id: 3 }] },
]

describe('resources reducer', () => {
  test(`should reduce ${types.GET_APPLICATIONS}`, () => {
    const expected = { ...initialState, applications }
    const newState = resourcesReducer(initialState, actions.getApplications(applications))
    expect(newState).toEqual(expected)
  })

  test(`should reduce ${types.GET_FIRMWARES}`, () => {
    const expected = { ...initialState, firmwares }
    const newState = resourcesReducer(initialState, actions.getFirmwares(firmwares))
    expect(newState).toEqual(expected)
  })

  test(`should reduce ${types.GET_DEVICES}`, () => {
    const expected = { ...initialState, devices }
    const newState = resourcesReducer(initialState, actions.getDevices(devices))
    expect(newState).toEqual(expected)
  })

  test(`should reduce ${types.GET_CATEGORIES}`, () => {
    const expected = { ...initialState, categories }
    const newState = resourcesReducer(initialState, actions.getCategories(categories))
    expect(newState).toEqual(expected)
  })

  test(`should reduce ${types.GET_PROVIDERS}`, () => {
    const expected = { ...initialState, providers }
    const newState = resourcesReducer(initialState, actions.getProviders(providers))
    expect(newState).toEqual(expected)
  })

  test(`should reduce ${types.GET_PUBLISHERS}`, () => {
    const expected = { ...initialState, publishers }
    const newState = resourcesReducer(initialState, actions.getPublishers(publishers))
    expect(newState).toEqual(expected)
  })

  test(`should reduce ${types.GET_MCU}`, () => {
    const expected = { ...initialState, mcu }
    const newState = resourcesReducer(initialState, actions.getMcu(mcu))
    expect(newState).toEqual(expected)
  })

  test(`should reduce ${types.RESOURCES_ERROR}`, () => {
    const expected = { ...initialState, error: 'some error' }
    const newState = resourcesReducer(initialState, actions.resourcesError('some error'))
    expect(newState).toEqual(expected)
  })

  test('should return state if action is not handled', () => {
    const expected = { ...initialState }
    const newState = resourcesReducer(undefined, { type: 'SOME_OTHER_ACTION' })
    expect(newState).toEqual(expected)
  })
})
