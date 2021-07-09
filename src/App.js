import "./App.css";
import React, { useContext, useState } from "react";
import { GuestContext } from "./store/guestContext";
import NewGuestForm from "./components/NewGuestForm";
import GuestList from "./components/GuestList";
import Header from "./components/Header";

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
      <Header />
      <main>
        <NewGuestForm onAddUser={onAddUser}></NewGuestForm>
        <GuestList guestList={guestList}></GuestList>
      </main>
    </React.Fragment>
  );
}

export default App;
