import React, { useCallback } from 'react'

function Form(props) {
  const onSubmitForm = useCallback(event => {
    event.preventDefault()
    event.stopPropagation()

    const { onSubmit = () => {} } = props
    const fields = Array.prototype.slice.call(event.target)
      .filter(field => field.name)
      .reduce((form, { name, value }) => ({
        ...form,
        [name]: typeof value === 'string'
          ? value.trim()
          : value,
      }), {})

    onSubmit(fields)
  }, [])
  const { children } = props

  return (
    <form {...props} onSubmit={onSubmitForm}>
      {children}
    </form>
  )
}

function Input(props) {
  const { label, name, key } = props

  return (
    <label htmlFor={name} key={key}>
      <div>{label}</div>
      <input
        {...props}
        id={name}
        name={name}
      />
    </label>
  )
}

module.exports = {
  Form, Input,
}
