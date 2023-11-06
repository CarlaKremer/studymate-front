import { useEffect, useRef, useState } from "react";
import { ScreenShare } from "./styles";
import { Socket, io } from "socket.io-client";
import { v4 as uuidV4 } from "uuid";
import Peer from 'peerjs';

interface ScreenSharingProps {
    server: string;
    roomId: any;
}

export default function ScreenSharing({ server, roomId }: ScreenSharingProps) {
    const [stream, setStream] = useState<MediaStream | undefined>(undefined);
    const [remoteStream, setRemoteStream] = useState<MediaStream | undefined>(undefined);
    const [isSharing, setIsSharing] = useState(false);
    const [peer, setPeer] = useState<Peer | null>(null);

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const socket = io(server);

    const peerConfig = {
        host: 'localhost',
        port: 9000,
        path: '/studymate'
    };

    useEffect(() => {
        const initializePeer = async () => {
            const newPeer = new Peer(peerConfig);

            socket.on('users-connected', (users: string[]) => {
                console.log('USERS IN THE ROOM', users);
                console.log('TYPE', typeof(users));
                users.forEach((userId: string) => {
                    console.log('CALLING', userId);
                    // connectNewUser(userId, userStream);
                });
            });

            newPeer.on('open', (id) => {
                socket.emit('join-video-sharing', { roomId, userId: id });
            });


            setPeer(newPeer);
        }

        initializePeer();
    }, []);

    useEffect(() => {
        peer?.on('call', (call) => {
            call.answer();
            console.log('CALL ANSWERED')
            call.on('stream', (remoteStream) => {
                console.log('RECEIVED STREAM', remoteStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = remoteStream;
                    videoRef.current.play();
                }
            });
        });
    }, []);

    const connectNewUser = (userId: string, stream: MediaStream) => {
        console.log('CALLING')
        const call = peer?.call(userId, stream);
        console.log('CALLED')
        setIsSharing(true);
        if (videoRef.current) {
            console.log('STREAM HERE')
            videoRef.current.srcObject = stream;
            videoRef.current.play();
        }
        call?.on('stream', remoteStream => {
            if (videoRef.current) {
                videoRef.current.srcObject = remoteStream;
                videoRef.current.play();
            }
        });
    }

    const startStream = async () => {
        try {
            const userStream = await navigator
                .mediaDevices.getDisplayMedia({ video: true, audio: true });

            console.log('STREAM CAPTURED');
            setStream(userStream);
            setIsSharing(true);

            if (videoRef.current) {
                videoRef.current.srcObject = userStream;
                videoRef.current.play();
                console.log('SHOWING FOR THE STREAMER');
            }

            socket.emit('get-users', { roomId });
        } catch (error) {
            console.error("Error sharing screen:", error);
        }
    };

    const stopStream = () => {
        if (stream) {
            stream.getTracks().forEach((track) => track.stop());
            if (videoRef.current)
                videoRef.current.srcObject = null
            peer!.destroy();
            setStream(undefined);
            setIsSharing(false);
        }
    };

    return (
        <ScreenShare id="screen-share">
            <div className="buttons-container">
                {!isSharing ? (
                    <button onClick={startStream}>Start Stream</button>
                ) : (
                    <button onClick={stopStream} disabled={!isSharing}>
                        Stop Stream
                    </button>
                )}
            </div>

            <video ref={videoRef} hidden={!isSharing}
                width={'100%'} autoPlay muted playsInline />

        </ScreenShare>
    );
}