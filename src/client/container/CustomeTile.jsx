import { ControlBar, TrackMutedIndicator, TrackRefContext, VideoTrack } from '@livekit/components-react'
import React from 'react'

export default function CustomeTile() {
    return (
        <div style={{ position: 'relative', border: '1px solid black' }}>
            
            <TrackRefContext.Consumer>
                {(track) => {
                    if (!track) {
                        return null;
                    }
                    return <>
                        <VideoTrack trackRef={track} style={{  width: '300px', height: '200px'}} />
                        <TrackMutedIndicator trackRef={track} className="your-classes" style={{ padding: '1rem' }} />
                    </>
                }}
            </TrackRefContext.Consumer>
        </div>
    )
}
