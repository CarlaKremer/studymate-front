import { use, useContext, useEffect, useRef, useState } from "react";
import '@livekit/components-styles';
import {
  ControlBar,
  GridLayout,
  LiveKitRoom,
  TrackRefContext,
  isTrackReference,
  VideoTrack,
  TrackMutedIndicator,
  RoomAudioRenderer,
  useTracks,
  ParticipantName,
} from '@livekit/components-react';
import { Track } from "livekit-client";
import { Row } from "./styles";
import styles from './style.module.scss';
import {

  RoomName,
  TrackLoop,

  useIsMuted,
  useIsSpeaking,
  useToken,
  useTrackRefContext,

} from '@livekit/components-react';
import { useMemo, } from 'react';

const serverUrl = 'ws://localhost:7880';


export default function VideoCall({ token }: { token: string }) {
  const [tryToConnect, setTryToConnect] = useState(false);
  const [connected, setConnected] = useState(false);

  return (
    <div data-lk-theme="default" className={styles.container}>
      <LiveKitRoom
        token={token}
        serverUrl={serverUrl}
        connect={tryToConnect}
        video={false}
        audio={true}
        // simulateParticipants={15}
        onConnected={() => setConnected(true)}
        onDisconnected={() => {
          setTryToConnect(false);
          setConnected(false);
        }}
        style={{ backgroundColor: 'transparent' }}
      >
        <div style={{ display: 'grid', placeContent: 'center', marginLeft: "1rem", height: '100%' }}>
          <button
            className="lk-button"
            onClick={() => {
              setTryToConnect(true);
            }}
          >
            Enter Room
          </button>
        </div>

        <div className={styles.slider} style={{ bottom: connected ? '0px' : '-100%' }}>
          <h1>
            <RoomName />
          </h1>
          <Stage />
          <ScreenShare />
          <ControlBar
            variation="minimal"
            controls={{ microphone: true, camera: false, screenShare: true }}
          />
          <RoomAudioRenderer />
        </div>
      </LiveKitRoom>
    </div>
  );

}

const ScreenShare = () => {
  const tracksScreenShare = useTracks([Track.Source.ScreenShare]);

  return <div style={{ maxHeight: '400px', overflow: 'scroll' }}>
    <GridLayout tracks={tracksScreenShare}>
      <TrackRefContext.Consumer>
        {(track) => track && (
          <div className="row" >
            {isTrackReference(track) ?
              <>
                <CustomScreenShareTile track={tracksScreenShare} />
              </>
              : <></>}
            <Row>
              <ParticipantName />
            </Row>
          </div>
        )}
      </TrackRefContext.Consumer>
    </GridLayout>
  </div>;
}
const Stage = () => {
  const tracksReferences = useTracks([Track.Source.Microphone]);

  return (
    <div className="">
      <div className={styles.stageGrid}>
        <TrackLoop tracks={tracksReferences}>
          <CustomParticipantTile></CustomParticipantTile>
        </TrackLoop>
      </div>
    </div>
  );
};

const CustomParticipantTile = () => {
  const trackRef = useTrackRefContext();
  const isSpeaking = useIsSpeaking(trackRef.participant);
  const isMuted = useIsMuted(trackRef);

  const id = useMemo(() => trackRef.participant.identity, [trackRef.participant.identity]);

  return (
    <section className={styles['participant-tile']} title={trackRef.participant.name}>
      <div
        // className={`rounded-full border-2 p-0.5 transition-colors duration-1000 ${
        className={styles['avatar-container']}
        style={{
          borderColor: isSpeaking ? 'greenyellow' : 'transparent',
        }}
      >
        <div
          className={styles.avatar}
        // className="z-10 grid aspect-square items-center overflow-hidden rounded-full bg-beige transition-all will-change-transform"
        >
          <img
            src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${id}`}
            className="fade-in"
            width={100}
            height={100}
            alt={`Avatar of user: ${trackRef.participant.identity}`}
          />
        </div>
      </div>

      <div style={{ opacity: isMuted ? 1 : 0 }} className={styles['mic-container']}>
        <div>
          <TrackMutedIndicator className={styles.mic} trackRef={trackRef}></TrackMutedIndicator>
        </div>
      </div>
    </section>
  );
};

const CustomScreenShareTile = (track: any) => {
  return (
    <div style={{ maxHeight: '600px', overflow: 'auto' }}>
      <VideoTrack {...track} placeholder="true" style={{ width: '100%' }}/>
    </div>
  );
};
