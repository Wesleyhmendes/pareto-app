import { Button } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import * as S from '../Chats/chats.styles';

type CardProps = {
  name: string;
  id: number;
};

function ChatCard({ name, id }: CardProps) {
  const navigate = useNavigate();
  return (
    <S.CardDiv>
      <h3>{ name }</h3>
      <Button
        onClick={ () => navigate(`/chat/${id}`) }
        color="green"
        appearance="primary"
      >
        <IoIosArrowDroprightCircle size={ 22 } />
      </Button>
    </S.CardDiv>
  );
}

export default ChatCard;
