import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { Form, Input, SearchBtn } from './SearchForm.styled';

const SearchForm = ({ onSubmit, value }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.elements.query.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        defaultValue={value}
        placeholder="Enter the title of the movie."
      />
      <SearchBtn type="submit">
        <BsSearch />
        Search
      </SearchBtn>
    </Form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
