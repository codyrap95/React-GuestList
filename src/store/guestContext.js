import { React, createContext } from "react";

class Guest {
  constructor(firstName = "", lastName = "") {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  id = Date.now();
  receivedInvite = false;
  knowsAbout = false;
  isComing = null;
}

const GuestObj = {
  guestList: [],
  addGuest(firstName, lastName) {
    this.guestList.push(new Guest(firstName, lastName));
  },
};

export const GuestContext = createContext({
  guestList: [],
  addGuest(firstName, lastName) {
    this.guestList.push(new Guest(firstName, lastName));
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
