import React, { useCallback } from 'react'

function useSubmit(props) {
  return useCallback(event => {
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
}

function Form(props) {
  const onSubmitForm = useSubmit(props)
  const { children } = props

  return (
    <form {...props} onSubmit={onSubmitForm}>
      {children}
    </form>
  )
}

function Input(props) {
  const { label, name } = props

  return (
    <label htmlFor={name}>
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
  Form, Input, useSubmit,
}
