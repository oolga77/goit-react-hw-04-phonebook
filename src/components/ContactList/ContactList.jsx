import propTypes from 'prop-types';
import { DeleteBtn, Item, List } from './ContactList.style';

export const ContactList = ({ contacts, handleDelete }) => (
  <div>
    <List>
      {contacts.map((contact, id) => (
        <Item key={id}>
          {contact.name}: {contact.number}
          <DeleteBtn type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  </div>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
