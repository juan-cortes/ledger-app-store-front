// @flow
import * as React from 'react'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/Menu/MenuItem'
import Select from 'material-ui/Select'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'

import Form from '../../../utils/form'

type Props = {
  devices: Object[],
  providers: Object[],
  createResource: Function,
}

const initFields = {
  device: '',
  name: '',
  description: '',
  display_name: '',
  target_id: '',
  providers: [],
}

const DeviceVersion = ({ devices, createResource, providers }: Props): React.Node => (
  <React.Fragment>
    <Form type="device_versions" initFields={initFields}>
      {({ onChange, onSelectChange, onSubmit, fields }) => (
        <form className="form" onSubmit={onSubmit(createResource)}>
          <TextField
            id="device"
            select
            required
            label="device"
            value={fields.device}
            onChange={onSelectChange('device')}
            className="input"
          >
            {devices.map(device => (
              <MenuItem key={device.id} value={device.id}>
                {device.name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="name"
            label="name"
            type="string"
            onChange={onChange('name')}
            value={fields.name}
            className="input"
            required
          />
          <TextField
            id="description"
            label="description"
            type="string"
            onChange={onChange('description')}
            value={fields.description}
            className="input"
          />
          <TextField
            id="display_name"
            label="display name"
            type="string"
            onChange={onChange('display_name')}
            value={fields.display_name}
            className="input"
          />
          <TextField
            id="target_id"
            label="target id"
            type="string"
            onChange={onChange('target_id')}
            value={fields.target_id}
            className="input"
          />
          <FormControl className="input">
            <InputLabel htmlFor="provider">provider(s)</InputLabel>
            <Select
              multiple
              input={<Input id="provider" />}
              onChange={onSelectChange('providers')}
              value={fields.providers}
              renderValue={selected =>
                providers
                  .filter(provider => selected.includes(provider.id))
                  .map(el => el.name)
                  .join(', ')
              }
            >
              {providers.map(provider => (
                <MenuItem key={provider.name} value={provider.id}>
                  <Checkbox checked={fields.providers.indexOf(provider.id) > -1} />
                  {provider.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="submit">
            <Button type="submit" size="large" variant="raised" color="secondary">
              Submit
            </Button>
          </div>
        </form>
      )}
    </Form>

    <style jsx>{`
      .form :global(.input) {
        box-sizing: border-box;
        padding-right: 8px;
        margin-top: 12px;
        width: 50%;
      }

      .form .submit {
        padding: 12px 0;
      }
    `}</style>
  </React.Fragment>
)

export default DeviceVersion
