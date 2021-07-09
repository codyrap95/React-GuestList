import "./App.css";
import React, { useContext, useState } from "react";
import { GuestContext } from "./store/guestContext";
import NewGuestForm from "./components/NewGuestForm";
import GuestList from "./components/GuestList";

function App() {
  console.log("app rendered");
  const guestCtx = useContext(GuestContext);
  const [guestList, setGuestList] = useState(guestCtx.guestList);
  const onAddUser = (newUser) => {
    guestCtx.addGuest(
      newUser.firstName,
      newUser.lastName,
      newUser.knowsAbout,
      newUser.receivedInvite,
      newUser.isComing
    );
    setGuestList([...guestCtx.guestList]);
    console.log(guestList);
  };
  return (
    <React.Fragment>
      <NewGuestForm onAddUser={onAddUser}></NewGuestForm>
      <GuestList guestList={guestList}></GuestList>
    </React.Fragment>
  );
}

export default App;
