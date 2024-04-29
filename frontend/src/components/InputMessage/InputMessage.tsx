/* eslint-disable jsx-a11y/control-has-associated-label */
import { ChangeEvent, useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import * as S from './InputMessage.style';

type InputProps = {
  addMessage: (text: string) => void;
};

function InputMessage({ addMessage }: InputProps) {
  const [text, setText] = useState('');

  const saveText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addMessage(text);
      setText('');
    }
  };

  const handleClick = () => {
    addMessage(text);
    setText('');
  };

  return (
    <S.Section>
      <input
        value={ text }
        onChange={ (e) => saveText(e) }
        onKeyDown={ handleKeyDown }
        type="text"
        id="messageInput"
      />
      <button onClick={ handleClick }>
        <IoMdSend size={ 30 } />
      </button>
    </S.Section>
  );
}

export default InputMessage;
