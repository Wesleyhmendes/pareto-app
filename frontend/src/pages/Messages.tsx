import { useState } from 'react';
import InputMessage from '../components/InputMessage/InputMessage';
import Message from '../components/Message/Message';
import * as S from '../components/Message/Messages.styles';
import MessageHeader from '../components/MessageHeader/MessageHeader';

function Messages() {
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (text: string) => {
    setMessages([...messages, text]);
  };
  return (
    <S.Section>
      <MessageHeader />
      <div className="messages-container">
        { messages.map((message, index) => (
          <Message key={ index } content={ message } />
        )) }
      </div>
      <S.InputContainer>
        <InputMessage addMessage={ addMessage } />
      </S.InputContainer>
    </S.Section>
  );
}

export default Messages;
