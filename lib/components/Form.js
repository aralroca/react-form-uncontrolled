import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

/**
 * Form (uncontrolled)
 *
 * @description All fields of the form should be defined by the name attribute.
 * @example
 * <input type="text" name="FirstName" />
 * <input type="text" name="SecondName" />
 *
 * onSubmit returns an object with { FirstName: value, SecondName: value }
 */
export default class Form extends PureComponent {
  constructor(props){
    super(props);
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }
  
  onSubmitForm(event){
    event.preventDefault()
    event.stopPropagation()

    const fields = Array.prototype.slice.call(event.target)
      .filter(field => field.name)
      .reduce((form, { name, value }) => ({
        ...form,
        [name]: typeof value === 'string'
          ? value.trim()
          : value,
      }), {})

    this.props.onSubmit(fields)
  }
  
  render(){
    return (
      <form {...this.props} onSubmit={this.onSubmitForm} >
        {this.props.children}
      </form>
    )
  }
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
}

Form.defaultProps = {
  children: null,
  onSubmit: () => {},
}
