import React from "react";
import Card from "./Card";
import { useRef } from "react";
import classes from "./NewGuestForm.module.css";
export default function NewGuestForm(props) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    let data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
    };
    props.onAddUser(data);
  };
  return (
    <Card>
      <form className={classes.newGuestForm} onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name:</label>
        <input ref={firstNameRef} type="text" name="FirstName" id="firstName" />
        <label htmlFor="lastName">Last Name:</label>
        <input ref={lastNameRef} type="text" name="lastName" id="lastName" />
        <button className={classes.submitBtn} type="submit">
          Submit
        </button>
      </form>
    </Card>
  );
}
