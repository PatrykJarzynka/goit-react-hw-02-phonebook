import styled from '@emotion/styled';

const FancyButton = styled.button(props => ({
  width: 100,
  marginLeft: 5,
  marginBottom: 10,
  borderColor: 'rgb(199, 193, 193)',
  borderRadius: 5,
  backgroundColor: props.onClick ? 'initial' : 'rgb(100, 115, 222)',
  fontWeight: 700,
  '&:hover': { cursor: 'pointer' },
  '&:focus': props.onClick && { backgroundColor: 'blue' },
}));

function Button({ label, type, onClick }) {
  return (
    <FancyButton type={type} onClick={onClick}>
      {label}
    </FancyButton>
  );
}

export default Button;
