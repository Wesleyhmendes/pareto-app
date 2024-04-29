import { GoogleLogin } from '@react-oauth/google';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  async function sendGoogleUserDataToBackend(googleUser: any) {
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(googleUser),
      });

      if (response.ok) {
        navigate('/chats');
      } else {
        console.error('Erro ao enviar dados para o backend:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao processar resposta do Google:', error);
    }
  }
  return (
    <GoogleLogin
      size="large"
      theme="filled_black"
      onSuccess={ (credentialResponse) => {
        const decode = jwtDecode<JwtPayload>(
          credentialResponse?.credential as string,
        );
        const googleUser = {
          email: decode.email as string,
          username: decode.name as string,
          profileImage: decode.picture as string,
          email_verified: decode.email_verified ? 'true' : 'false',
        };
        sendGoogleUserDataToBackend(googleUser);
      } }
      onError={ () => {
        console.log('Login Failed');
      } }
    />
  );
}

export default Login;
