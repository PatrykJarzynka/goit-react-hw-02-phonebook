import styled from '@emotion/styled';

const FancyInput = styled.input({
  width: '200px',
  marginLeft: 5,
  marginBottom: 20,
  '&:focus': { outlineColor: 'blue' },
});

function Number({ number, onChange }) {
  return (
    <FancyInput
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      number={number}
      onChange={onChange}
    />
  );
}

export default Number;
