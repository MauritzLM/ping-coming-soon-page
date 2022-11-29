# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

![mobile](./images/screenshot-mobile.png)
![desktop](./images/screenshot-desktop.png)

### Links

- Solution URL: [solution URL](https://your-solution-url.com)
- Live Site URL: [live site URL](https://mauritzlm.github.io/ping-coming-soon-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### What I learned

I learned that one can the novalidate attribute on a form to turn off the browser's automatic validation.

```html
<form novalidate>

</form>
```

One can use ::placeholder to styles placeholder text

```css
::placeholder {
  color: hsl(223, 100%, 88%);;
}
```
After turning off automatic browser validation, one can use the constraint validation API for client-side form validation with javascript.
Using validity on a form element retuns the Validity state object which contains properties describing its validity.

For example email.validity.valueMissing returns true if no value has been entered, one can use this to display a custom error message and styles. 

```js
 if (email.validity.valueMissing) {
            errorMsg.textContent = "Whoops! It looks like you forgot to add your email";
            errorMsg.style.display = "block";
            email.style.borderColor = "hsl(354, 100%, 66%)";
    }
```
### Continued development

 I want to continue learning about building custom form controls and better understand form validation, both on the client-side and server side.

### Useful resources

- [MDN client-side form validation article](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - Very useful article explaining client-side form validation using built in browser validation and using the constraint validation API.

- [w3 schools-how to change placeholder text](https://www.w3schools.com/howto/howto_css_placeholder.asp) - how to change placeholder styles.

## Author

- Frontend Mentor - [@MauritzLM](https://www.frontendmentor.io/profile/MauritzLM)



