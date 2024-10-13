import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contactData = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);
  const filteredData = contactData.filter((data) =>
    data.name.toLowerCase().trim().includes(filterValue.toLowerCase().trim())
  );

  return (
    <ul className={s.contactCard}>
      {filteredData.map((data) => {
        return (
          <li key={data.id}>
            <Contact id={data.id} name={data.name} number={data.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
