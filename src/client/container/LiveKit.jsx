import { ControlBar, LiveKitRoom, ParticipantLoop, ParticipantName, ParticipantTile, TrackLoop, useParticipants, useTracks, VideoConference } from '@livekit/components-react';
import { ConnectionState, Track } from 'livekit-client';
import React, { useEffect, useState } from 'react'
import LiveInner from './LiveInner';

function CityVideoRenderer() {
  const trackRefs = useTracks([Track.Source.Camera]);
  const tokyoCamTrackRef = trackRefs.find((trackRef) => trackRef.participant.name === 'tokyo');

  return (
    <>
      {tokyoCamTrackRef ? <VideoTrack trackRef={tokyoCamTrackRef} /> : <div>Tokyo is offline</div>}
    </>
  );
}

export default function LiveKit() {
  const [serverUrl, setServerUrl] = useState('');
  const [accessToken, setAccessToken] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/v1/get-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          room: 'tefiti',
          username: 'sanmeranam' + Date.now().toString(16)
        })
      });
      const data = await response.json();
      setServerUrl(data.livekitUrl);
      setAccessToken(data.token);
    };
    fetchData();
  }
    , []);
  return (
    <>
      <LiveKitRoom serverUrl={serverUrl} token={accessToken} connect={true}>
        <LiveInner/>
        <ControlBar variation='minimal' />
      </LiveKitRoom>
    </>
  );
}
