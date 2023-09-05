import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { Container } from './styles';
import Image from 'next/image';

interface ChatProps {
    server: string;
    username: string;
}

interface Message {
    username: string;
    message: string;
}

export default function Chat({server, username}:ChatProps) {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        // Conectar ao servidor Socket.io
        const newSocket = io(server);
        setSocket(newSocket);

        // Lidar com mensagens recebidas
        newSocket.on('message', (msg: string) => {
            const receivedMessage = JSON.parse(msg) as Message;
            setMessages((prevMessages) => [...prevMessages, receivedMessage]);
        });

        return () => {
            // Desconectar o socket quando o componente é desmontado
            newSocket.disconnect();
        };
    }, [server]);

    const sendMessage = () => {
        if (socket && message.trim() !== '') {
            // Enviar mensagem para o servidor
            const messageObject = { username, message };
            socket.emit('message', JSON.stringify(messageObject));
            setMessage('');
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };
return (
  <Container>
        <div>
            <div className="chat-container">
                <div className="message-list">
                    {messages.map((msg, index) => (
                        <div key={index}>
                            <strong  className='author'>{msg.username}: </strong>
                            <span className='message'>{msg.message}</span>
                        </div>
                    ))}
                </div>
                <div className="input-wrap">
                    <input
                        className='message-input'
                        type="text"
                        placeholder="Digite sua mensagem..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                    <button className='button-input' onClick={sendMessage}> 
                    <Image
                        alt="ícone de enviar"
                        src={"./assets/icons/send.svg"}
                        width={12}
                        height={12}
                        />
                    </button>
                </div>
            </div>
        </div>
      </Container>
);
}