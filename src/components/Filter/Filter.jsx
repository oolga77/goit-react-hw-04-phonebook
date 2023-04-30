import propTypes from 'prop-types';
import { Input, Label } from './Filter.style';

export const Filter = ({ filter, handleChange }) => (
  <div>
    <Label>Find contacts by Name </Label>
    <Input
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={handleChange}
    />
  </div>
);

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};
