import propTypes from 'prop-types';
import { useState } from 'react';
import { Form, FormInput, Label, FormButton } from './ContactForm.styled';

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => {
    const { value } = e.target;
    setName(value);
  };

  const handleChangeNumber = e => {
    const { value } = e.target;
    setNumber(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    handleSubmit({ name: name, number: number });
    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={onSubmit}>
      <Label>Name </Label>
      <FormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleChangeName}
      />
      <Label>Number </Label>
      <FormInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleChangeNumber}
      />
      <FormButton type="submit" onSubmit={handleSubmit}>
        Add contact
      </FormButton>
    </Form>
  );
};

ContactForm.propTypes = {
  handleSubmit: propTypes.func.isRequired,
};
