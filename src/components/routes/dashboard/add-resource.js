// @flow
import * as React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/Menu/MenuItem'
import { withStyles } from 'material-ui/styles'

import {
  resourcesApplicationsSelector,
  resourcesFirmwaresSelector,
  resourcesDevicesSelector,
  resourcesProvidersSelector,
  resourcesPublishersSelector,
  resourcesCategoriesSelector,
  resourcesApplicationVersionsSelector,
  resourcesFirmwareVersionsSelector,
  resourcesDeviceVersionsSelector,
  resourcesMcuSelector,
  resourcesMcuVersionsSelector,
} from '../../../selectors/resources-selectors'
import {
  fetchResources as fetchResourcesAction,
  createResource as createResourceAction,
} from '../../../actions/resources-actions'
import FormSwitcher from '../../common/forms/form-switcher'

type Props = {
  applications: Object[],
  applicationVersions: Object[],
  firmwares: Object[],
  firmwareVersions: Object[],
  devices: Object[],
  deviceVersions: Object[],
  publishers: Object[],
  providers: Object[],
  categories: Object[],
  mcu: Object[],
  mcuVersions: Object[],
  classes: Object,
  fetchResources: Function,
}

type State = {
  selected: string,
}

const styles = (theme: Object): Object => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
})

class AddResources extends React.Component<Props, State> {
  props: Props
  state: State

  state = {
    selected: '',
  }

  componentDidMount() {
    const { fetchResources } = this.props
    fetchResources()
  }

  onChange = (evt: { target: { value: string } }): void => {
    this.setState(state => ({ ...state, selected: evt.target.value }))
  }

  render(): React.Node {
    const { classes, ...others } = this.props
    const { selected } = this.state

    return (
      <section>
        <TextField
          id="selected"
          select
          label="Resource Type"
          value={this.state.selected}
          onChange={this.onChange}
          className={classes.textField}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
        >
          <MenuItem value="providers">Provider</MenuItem>
          <MenuItem value="publishers">Publisher</MenuItem>
          <MenuItem value="categories">Category</MenuItem>
          <MenuItem value="firmwares">Se Firmware</MenuItem>
          {others.firmwares &&
            others.firmwares.length && (
              <MenuItem value="firmware_versions">Se Firmware Versions</MenuItem>
            )}
          <MenuItem value="applications">Application</MenuItem>
          {others.applications &&
            others.applications.length && (
              <MenuItem value="application_versions">Application Version</MenuItem>
            )}
          <MenuItem value="devices">Device</MenuItem>
          {others.devices &&
            others.devices.length && <MenuItem value="device_versions">Device Version</MenuItem>}
          <MenuItem value="mcu">Mcu</MenuItem>
          {others.mcu && others.mcu.length && <MenuItem value="mcu_versions">Mcu Version</MenuItem>}
        </TextField>
        <div className="form">
          <FormSwitcher selected={selected} {...others} />
        </div>

        <style jsx>{`
          .form {
            margin: 20px 0;
          }
        `}</style>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  applications: resourcesApplicationsSelector(state),
  applicationVersions: resourcesApplicationVersionsSelector(state),
  firmwares: resourcesFirmwaresSelector(state),
  firmwareVersions: resourcesFirmwareVersionsSelector(state),
  devices: resourcesDevicesSelector(state),
  deviceVersions: resourcesDeviceVersionsSelector(state),
  providers: resourcesProvidersSelector(state),
  publishers: resourcesPublishersSelector(state),
  categories: resourcesCategoriesSelector(state),
  mcu: resourcesMcuSelector(state),
  mcu_versions: resourcesMcuVersionsSelector(state),
})

const enhancer = compose(
  withStyles(styles),
  connect(mapStateToProps, {
    fetchResources: fetchResourcesAction,
    createResource: createResourceAction,
  }),
)

export default enhancer(AddResources)