import React from "react";
import Card from "./Card";

export default function GuestList(props) {
  const guestList = props.guestList;
  return (
    <Card>
      <ul>
        {guestList.map((guest) => (
          <li key={guest.id}>
            <ul>
              <li>First Name: {guest.firstName}</li>
              <li>Last Name: {guest.lastName}</li>
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
