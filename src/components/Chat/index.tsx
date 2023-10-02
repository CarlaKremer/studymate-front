import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { Container } from './styles';
import Image from 'next/image';

interface ChatProps {
    server: string;
    roomId: any;
    username: string;
}

interface Message {
    username: string;
    message: string;
}

export default function Chat({ server, username, roomId }: ChatProps) {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        // Conectar ao servidor Socket.io
        const socket = io(server);
        setSocket(socket);

        socket.emit('room_selected', roomId);
        // Lidar com mensagens recebidas
        socket.on('message', (message: Message) => {
            console.log(message)
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            // Desconectar o socket quando o componente é desmontado
            socket.disconnect();
        };

    }, [server]);

    const sendMessage = () => {
        if (socket && message.trim() !== '') {
            // Enviar mensagem para o servidor
            const messageObject = { username, message, roomId };
            socket.emit('message', messageObject);
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
                                <strong className='author'>{msg.username}: </strong>
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