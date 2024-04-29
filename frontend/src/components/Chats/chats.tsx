import ChatCard from '../ChatCard/ChatCard';
import * as S from './chats.styles';

function Chats() {
  const name = 'Anthropic Claude 3';
  const id = 2;
  return (
    <S.Section>
      <ul>
        <li>
          <ChatCard name={ name } id={ id } />
        </li>
        <li>
          <ChatCard name={ name } id={ id } />
        </li>
        <li>
          <ChatCard name={ name } id={ id } />
        </li>
        <li>
          <ChatCard name={ name } id={ id } />
        </li>
      </ul>
    </S.Section>
  );
}

export default Chats;
