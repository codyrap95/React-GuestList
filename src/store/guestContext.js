import { React, createContext } from "react";

class Guest {
  constructor(
    firstName = "",
    lastName = "",
    knowsAbout = false,
    receivedInvite = false,
    isComing = null
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.knowsAbout = knowsAbout;
    this.receivedInvite = receivedInvite;
    this.isComing = isComing;
  }
  id = Date.now();
}

const GuestObj = {
  guestList: [],
  addGuest(firstName, lastName, knowsAbout, receivedInvite, isComing) {
    this.guestList.push(
      new Guest(firstName, lastName, knowsAbout, receivedInvite, isComing)
    );
  },
};

export const GuestContext = createContext({
  guestList: [],
  addGuest(firstName, lastName, knowsAbout, receivedInvite, isComing) {
    this.guestList.push(
      new Guest(firstName, lastName, knowsAbout, receivedInvite, isComing)
    );
    console.log(this.guestList);
  },
});

const GuestContextProvider = (props) => {
  return (
    <GuestContext.Provider value={GuestObj}>
      {props.children}
    </GuestContext.Provider>
  );
};
export default GuestContextProvider;
