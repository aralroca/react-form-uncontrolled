# React form (uncontrolled)

![npm version](https://img.shields.io/badge/npm-v0.1.0-blue.svg) 

*author: Aral Roca <aral-rg@hotmail.com>*

-------------------

## Install

* `npm install react-form-uncontrolled --save`

## Usage

```js
import { Form } from 'react-form-uncontrolled'

function SignIn(props){
 return (
    <Form onSubmit={props.onSignIn}>

      <div>
        <input
          required
          name="username"
          type="text"
          placeholder={userNamePlaceholder}
        />
      </div>

      <div>
        <input
          name="password"
          type="password"
          placeholder={passwordPlaceholder}
        />
      </div>

      <button type="submit">
         Sign In
      </button>
  </Form>
  )
}
```

And **props.SignIn** is fired on submitting the form and receive an object with:

* Key = name of each input field
* Value = value of each input field

```js
onSignIn({ username, password }) {
 // ...
}
```

## 📕 Read more about this component
* https://aralroca.com/2018/11/02/dont-control-everything-react-forms/
