import { useState } from 'react';
import { PropTypes} from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  // extraigo el argumento event desde onchange 
  const onSubmit= (event) => {
    event.preventDefault();
    if(inputValue.trim().length <1) return;
    onNewCategory(inputValue.trim());
    //limpio desp de agregar
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit} aria-label='form'>
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
onNewCategory: PropTypes.func.isRequired
}