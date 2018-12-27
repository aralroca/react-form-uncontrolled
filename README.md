# React form (uncontrolled)

![npm version](https://img.shields.io/badge/npm-v0.3.0-blue.svg) 

*author: Aral Roca <aral-rg@hotmail.com>*

-------------------

3kb library to do the forms much simpler without state. Do you have all the fields inside the onSubmit function. Also you don't need to preventDefault and trim string fields, you can directly start working with fields.

## Install

* `npm install react-form-uncontrolled --save`

*The last version is using React hooks (experimental in React 16.7) under the hood, because functional components minify much better than classes. If you want compatibility with React 16.6 you can use `react-form-uncontrolled@0.1.0` version*

## Usage

```js
import { Form } from 'react-form-uncontrolled'

function SignIn(props){
 return (
    <Form onSubmit={props.onSignIn}>

      <label htmlFor="username">
        <div>Username</div>
        <input
          type="text"
          required
          id="username"
          name="username"
          placeholder="Write here the username"
        />
      </label>

      <label htmlFor="password">
        <div>Password</div>
        <input
          type="password"
          required
          id="password"
          name="password"
          placeholder="Write here the password"
        />
      </label>

      <button type="submit">
         Sign In
      </button>
  </Form>
  )
}
```

or:


```js
import { Form, Input } from 'react-form-uncontrolled'

function SignIn(props){
 return (
    <Form onSubmit={props.onSignIn}>

      <Input 
        label="Username"
        name="username"
        type="text"
        required
        placeholder="Write here the username"
      />

      <Input 
        label="Password"
        name="password"
        type="password"
        required
        placeholder="Write here the password"
      />

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
