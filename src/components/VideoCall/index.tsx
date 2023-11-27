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
  CarouselLayout,
  ParticipantTile,
  ParticipantLoop,
  ParticipantName,
  useParticipants,
  PreJoin,
  FocusLayout 
} from '@livekit/components-react';
import { Track } from "livekit-client";
import { Wrap, Container, Row} from "./styles";
import styles from './style.module.scss';
import {

  RoomName,
  TrackLoop,
  
  useIsMuted,
  useIsSpeaking,
  useToken,
  useTrackRefContext,
  
} from '@livekit/components-react';
import { useMemo,} from 'react';

const serverUrl = 'ws://localhost:7880';

export default function VideoCall({ token }: { token: string }) {

  return (
    <Wrap>
      <LiveKitRoom
        video={false}
        audio={false}
        token={token}
        serverUrl={serverUrl}
        // Use the default LiveKit theme for nice styles.
        data-lk-theme="default"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: 'transparent'
        }}
      >
        {/* Your custom component with basic video conferencing functionality. */}
        <div>
          <MyVideoConference />
          {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
          <RoomAudioRenderer />
        </div>  {/* Controls for the user to start/stop audio, video, and screen
        share tracks and to leave the room. */}
        <ControlBar className="end" />
      </LiveKitRoom>
    </Wrap>
  );
}

const MyVideoConference = () => {
  const tracks = useTracks([
    { source: Track.Source.Camera, withPlaceholder: true },
  ]);

  const tracksScreenShare = useTracks([
    { source: Track.Source.ScreenShare, withPlaceholder: false },
  ]);
  
  return (
    <>
      <CarouselLayout  tracks={tracks}>
        <TrackRefContext.Consumer>
          {(track) =>
            track && (
              <div className="row">
              {isTrackReference(track) ? 
                <>
                  <CustomParticipantTile track={track}/>
                  {/* <CarouselLayout tracks={tracks} orientation="horizontal"> */}
                    {/* <VideoTrack {...track} /> */}
                    {/* <ParticipantTile /> */}
                  {/* </CarouselLayout>  */}
                </>
              : <></>}
              <Row>
                <ParticipantName/>
              </Row>
                  {/* <TrackMutedIndicator source={Track.Source.Microphone} /> */}
                  {/* <TrackMutedIndicator source={track.source} /> */}
              </div>
            )
          }
        </TrackRefContext.Consumer>
      </CarouselLayout>

      <GridLayout  tracks={tracksScreenShare}>
        <TrackRefContext.Consumer>
          {(track) =>
            track && (
              <div className="row">
              {isTrackReference(track) ? 
                <>
                  <CustomScreenShareTile track={tracksScreenShare}/>
                </>
              : <></>}
              <Row>
                <ParticipantName/>
              </Row>
              </div>
            )
          }
        </TrackRefContext.Consumer>
      </GridLayout>
    </>
  );
}

const CustomParticipantTile = (track:any) => {
  const trackRef = useTrackRefContext();
  const isSpeaking = useIsSpeaking(trackRef.participant);
  const isMuted = useIsMuted(trackRef);

  const id = useMemo(() => trackRef.participant.identity, [trackRef.participant.identity]);
  console.log(track);
  return (
    <section className={ styles['participant-tile'] } title={trackRef.participant.name}>
          <div
            className={styles['avatar-container']}
            style={{ borderColor: isSpeaking ? 'greenyellow' : 'transparent' }}
          >
            <div
              className={styles.avatar}
            >
              {/* {!isTrackReference(track) ?  */}
                  <VideoTrack {...track} placeholder="true" />
              {/* : <img
                src={`https://avatars.dicebear.com/api/avataaars/${id}.svg?mouth=default,smile,tongue&eyes=default,happy,hearts&eyebrows=default,defaultNatural,flatNatural`}
                className="fade-in"
                width={150}
                height={150}
                alt={`Avatar of user: ${trackRef.participant.identity}`}
                />} */}
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

const CustomScreenShareTile = (track:any) => {
  const trackRef = useTrackRefContext();
  const isSpeaking = useIsSpeaking(trackRef.participant);
  const isMuted = useIsMuted(trackRef);

  return (
    <div>
              <VideoTrack {...track} placeholder="true"  />
    </div>
  );
};