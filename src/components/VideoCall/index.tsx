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
} from '@livekit/components-react';
import { Track } from "livekit-client";


const serverUrl = 'ws://localhost:7880';

export default function VideoCall({ token }: { token: string }) {

  return (
    <LiveKitRoom
      video={false}
      audio={false}
      token={token}
      serverUrl={serverUrl}
      // Use the default LiveKit theme for nice styles.
      data-lk-theme="default"
      style={{
        height: '100%',
        backgroundColor: 'transparent'
      }}
    >
      {/* Your custom component with basic video conferencing functionality. */}
      <MyVideoConference />
      {/* The RoomAudioRenderer takes care of room-wide audio for you. */}
      <RoomAudioRenderer />
      {/* Controls for the user to start/stop audio, video, and screen 
      share tracks and to leave the room. */}
      <ControlBar />
    </LiveKitRoom>
  );
}

const MyVideoConference = () => {
  const tracks = useTracks([
    { source: Track.Source.Camera, withPlaceholder: true },
    { source: Track.Source.ScreenShare, withPlaceholder: false },
  ]);
  return (
    <>
      <GridLayout tracks={tracks}>
        <TrackRefContext.Consumer>
          {(track) =>
            track && (
              <div className="my-tile">
                {isTrackReference(track) ? <VideoTrack {...track} /> : <div></div>}
                <div style={{ display: 'flex' }}>
                  <TrackMutedIndicator source={Track.Source.Microphone} />
                  <TrackMutedIndicator source={track.source} />
                </div>
              </div>
            )
          }
        </TrackRefContext.Consumer>
      </GridLayout>
    </>
  );
}