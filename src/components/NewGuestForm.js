import React from "react";
import Card from "./Card";
import { useRef } from "react";
import classes from "./NewGuestForm.module.css";
export default function NewGuestForm(props) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const knowsAboutRef = useRef();
  const receivedInviteRef = useRef();
  const isComingRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    let data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      knowsAbout: knowsAboutRef.current.checked,
      receivedInvite: receivedInviteRef.current.checked,
      isComing: isComingRef.current.checked,
    };
    props.onAddUser(data);
  };
  return (
    <Card>
      <form className={classes.newGuestForm} onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name:</label>
        <input
          className={classes.textField}
          ref={firstNameRef}
          type="text"
          name="FirstName"
          id="firstName"
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          className={classes.textField}
          ref={lastNameRef}
          type="text"
          name="lastName"
          id="lastName"
        />
        <div className={classes.checkboxes}>
          <div>
            <label htmlFor="knowsAbout">Knows About</label>
            <input
              ref={knowsAboutRef}
              type="checkbox"
              name=""
              id="knowsAbout"
            />
          </div>

          <div>
            <label htmlFor="receivedInvite">Received Invite</label>
            <input
              ref={receivedInviteRef}
              type="checkbox"
              name=""
              id="receivedInvite"
            />
          </div>

          <div>
            <label htmlFor="isComing">Is Coming</label>
            <input ref={isComingRef} type="checkbox" name="" id="isComing" />
          </div>
        </div>
        <button className={classes.submitBtn} type="submit">
          Submit
        </button>
      </form>
    </Card>
  );
}
