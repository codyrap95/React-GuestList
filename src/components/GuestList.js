import React from "react";
import Card from "./Card";
import GuestIcons from "./GuestIcons";
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
              <GuestIcons
                receivedInvite={guest.receivedInvite}
                knowsAbout={guest.knowsAbout}
                isComing={guest.isComing}
              />
            </ul>
          </li>
        ))}
      </ul>
    </Card>
  );
}
