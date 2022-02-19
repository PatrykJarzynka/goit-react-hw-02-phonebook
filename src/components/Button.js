import styled from '@emotion/styled';

const FancyButton = styled.button({
  width: 100,
  marginLeft: 5,
  marginBottom: 10,
  '&:hover': { cursor: 'pointer' },
});

function Button({ label, type, onClick }) {
  return (
    <FancyButton type={type} onClick={onClick}>
      {label}
    </FancyButton>
  );
}

export default Button;
