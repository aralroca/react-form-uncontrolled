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

module.exports = {
  Form,
}
