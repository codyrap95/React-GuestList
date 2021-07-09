import React from "react";
import Card from "./Card";
import classes from "./GuestList.module.css";
export default function GuestList(props) {
  const guestList = props.guestList;
  return (
    <Card>
      <ul className={classes.guestList}>
        {guestList.map((guest) => (
          <li key={guest.id}>
            <ul className={classes.guest}>
              <li>
                {guest.firstName} {guest.lastName}
              </li>
              <li>Received Invite: {guest.receivedInvite.toString()}</li>
              <li>Knows About: {guest.knowsAbout.toString()}</li>
              <li>
                Is Coming:
                {guest.isComing === null
                  ? "Unknown yet"
                  : guest.isComing.toString()}
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </Card>
  );
}
