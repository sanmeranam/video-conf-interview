import { ParticipantLoop, ParticipantName, ParticipantTile, TrackLoop, useParticipants, useTracks } from '@livekit/components-react';
import { Track } from 'livekit-client';
import React from 'react'
import CustomeTile from './CustomeTile';

export default function LiveInner() {
    const cameraTracks = useTracks([
        { source: Track.Source.Camera, withPlaceholder: true },
        { source: Track.Source.ScreenShare, withPlaceholder: false },
      ]);
    return (
        <div>
            <TrackLoop tracks={cameraTracks}>
                <CustomeTile />
            </TrackLoop>
        </div>
    )
}
