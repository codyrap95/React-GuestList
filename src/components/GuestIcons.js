import React, { useState } from "react";
import classes from "./GuestIcons.module.css";
export default function GuestIcons(props) {
  const [knowsAbout, setKnowsAbout] = useState(props.knowsAbout);
  const [receivedInvite, setReceivedInvite] = useState(props.receivedInvite);
  const [isComing, setIsComing] = useState(props.isComing);
  return (
    <ul className={classes.guestIcons}>
      <li
        className={`${classes.guestIcon} ${knowsAbout ? "" : classes.inactive}`}
      >
        s
      </li>
      <li
        className={`${classes.guestIcon} ${
          receivedInvite ? "" : classes.inactive
        }`}
      >
        p
      </li>
      <li
        className={`${classes.guestIcon} ${isComing ? "" : classes.inactive}`}
      >
        c
      </li>
    </ul>
  );
}
