import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectLoading,
} from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const filteredData = useSelector(selectFilteredContacts);

  return (
    <>
      {loading && <h2>loading...</h2>}
      {error && <h2>Something went wrong!</h2>}
      <ul className={s.contactCard}>
        {filteredData.map((data) => {
          return (
            <li key={data.id}>
              <Contact id={data.id} name={data.name} number={data.number} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
