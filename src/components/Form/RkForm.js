import React, {Component} from 'react'
import RkFormInput from './RkFormInput'

class RkForm extends Component {
  state = {
    items: {},
    tooltip: false
  }

  componentWillMount () {
    // SET FORM FUNCTIONS
    const formName = this.props.name
    this.props.inputFormHandler(formName, () => this.touchForm(), this.resetForm, () => this.validateForm(), this.changeInputForm, this.changeInputProps)
  }

  // GET FUNCTION BY INPUTS
  inputFunctions = (name, eventTouched, eventReset, eventIsValid, changeValue, changeProps) => {
    this.setState(state => {
      return {
        items: {
          ...state.items,
          [name]: {
            ...state.items[name],
            $touch: eventTouched,
            $reset: eventReset,
            $isValid: eventIsValid,
            $change: changeValue,
            $changeProps: changeProps
          }
        }
      }
    })
  }

  // CHANGE VALUE
  changeInputForm = (key, value, extra = undefined) => {
    console.log('changeInput')
    console.log(key, value)
    if (this.state.items[key]) {
      this.state.items[key].$change(value, extra)
    }
  }

  // CHANGE INPUT PROPS
  changeInputProps = (key, value, extra = undefined) => {
    console.log('changeInput')
    console.log(key, value)
    if (this.state.items[key]) {
      this.state.items[key].$changeProps(value, extra)
    }
  }

  // RESET ALL INPUTS FORM
  touchForm = () => {
    Object.keys(this.state.items).map(it => {
      this.state.items[it].$touch()
    })
  }
  // TOUCH ALL INPUTS FORM
  resetForm = (option = null) => {
    console.log('RESET FORM')
    console.log(option)
    if (option === '_all_') {
      Object.keys(this.state.items).map(it => {
        console.log(it)
        this.state.items[it].$reset()
        this.state.items[it].$changeProps(null)
      })
    } else {
      Object.keys(this.state.items).map(it => {
        this.state.items[it].$reset()
      })
    }
  }
  // VALID ALL INPUTS FORM
  validateForm = () => {
    let isValidate = true
    let keys = Object.keys(this.state.items)

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      let valid = this.state.items[key].$isValid()
      if (valid === false) {
        isValidate = false
        break
      }
    }
    return isValidate
  }
  // SET CHANGE VALUES FORM
  inputChanged = (name, value) => {
    const formName = this.props.name
    this.props.inputChanged(formName, name, value)
  }

  render() {
    const FormInputs = { ...this.props.inputs }
    const inputs = Object.keys(FormInputs).map(key => {
      let fInput = null
      if (key[0] === '_' && key[1] === '_') {
        fInput = Object.keys(FormInputs[key]).map( iKey =>
          FormInputs[key][iKey] = {
            ...FormInputs[key][iKey],
            input: {
              ...FormInputs[key][iKey]['input'],
              name: iKey
            }
          }
        )
      } else {
        FormInputs[key]['input'] = {
          ...FormInputs[key]['input'],
          name: key
        }
        fInput = FormInputs[key]
      }
      return <RkFormInput key={key} tooltip={this.state.tooltip} fields={fInput} render={this.props.render} changed={this.inputChanged} inputFunctions={this.inputFunctions}/>
    })

    return (
      <form className='form-horizontal' autoComplete='off' >
        { inputs }
        { this.props.children ? <div>{this.props.children}</div> : null }
      </form>
    )
  }
}

export default RkForm
