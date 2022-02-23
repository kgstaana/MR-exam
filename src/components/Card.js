import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  height: 300px;
  border: 1px solid gray;
  padding: 16px;
`;

const Title = styled.h2``;

const Subtitle = styled.p``;

const Card = ({
  title,
  subtitle,
  isReadOnly,
  value,
  onHandleChange,
  ...rest
}) => {
  const handleChange = ({ target }) => {
    const { value } = target;
    onHandleChange(value);
  };

  return (
    <Container {...rest}>
      <Title data-testid="card-title">{title}</Title>
      <Subtitle data-testid="card-subtitle">{subtitle}</Subtitle>
      <input
        type="text"
        readOnly={isReadOnly}
        value={value}
        onChange={handleChange}
        data-testid="card-textfield"
      />
    </Container>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  isReadOnly: PropTypes.bool,
  value: PropTypes.string,
  onHandleChange: PropTypes.func
};

Card.defaultProps = {
  isReadOnly: false,
  value: '',
  onHandleChange: () => {},
};

export default Card;