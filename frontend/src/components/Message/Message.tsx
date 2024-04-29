import * as S from './Messages.styles';

type MessageProps = {
  content: string;
};

function Message({ content }: MessageProps) {
  return (
    <S.Message>
      <p>{ content }</p>
    </S.Message>
  );
}

export default Message;
