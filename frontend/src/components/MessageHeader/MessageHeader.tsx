/* eslint-disable jsx-a11y/control-has-associated-label */
import { IoArrowBackCircle } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import * as S from './MessageHeader.styles';

function MessageHeader() {
  const navigate = useNavigate();
  return (
    <S.Header>
      <button onClick={ () => navigate('/') }>
        <IoArrowBackCircle size={ 30 } />
      </button>
      <h2>Nome</h2>
    </S.Header>
  );
}

export default MessageHeader;
