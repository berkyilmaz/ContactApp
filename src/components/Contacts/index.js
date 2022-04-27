import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Berk Yılmaz",
      phone_number: "+90 (532) 4****13",
    },
    {
      fullname: "Burak Yılmaz",
      phone_number: "+90 (532) 1****93",
    },
    {
      fullname: "Sebahattin Yılmaz",
      phone_number: "+90 (533) 8****42",
    },
    {
      fullname: "Ferhan Yılmaz",
      phone_number: "+90 (533) 8****82",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1
        style={{
          color: "Black",
          fontWeight: "Bold",
          textAlign: "Center",
          paddingBottom: "15px",
          fontFamily: "Raleway",
          fontSize: "50px",
        }}
      >
        ContactApp.
      </h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
