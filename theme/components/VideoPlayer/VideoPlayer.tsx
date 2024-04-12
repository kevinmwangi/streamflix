import React, { useEffect, useRef, useState } from 'react';
import {
	isHLSProvider,
	MediaPlayer,
	MediaProvider,
	Poster,
	PlayButton,
	useStore,
	useMediaState,
	type MediaPauseRequestEvent,
	type MediaCanPlayDetail,
	type MediaCanPlayEvent,
	type MediaPlayerInstance,
	type MediaProviderAdapter,
	type MediaProviderChangeEvent,
} from '@vidstack/react';
import HLS from 'hls.js';

import { VideoLayout } from '@/theme/components/VideoPlayer/VideoLayout';
import '@vidstack/react/player/styles/default/theme.css';
import styles from '@/theme/scss/Player.module.scss';

interface VideoPlayerProps {
	src: string,
	poster: string,
	description: string,
	thumbnails: string,
	controlsHidden: boolean
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ src: propSrc, poster: propPoster, description: propDescription, thumbnails: propThumbnails, controlsHidden: propControlsHidden}) => {
	let player = useRef<MediaPlayerInstance>(null),
		[src, setSrc] = useState(propSrc);

	useEffect(() => {
		setSrc(propSrc);
	}, [propSrc]);

	const onProviderChange = ( provider: MediaProviderAdapter | null, nativeEvent: MediaProviderChangeEvent ) => {
		// We can configure provider's here.
		if (isHLSProvider(provider)) {
			provider.library = HLS;
		}
	}

	// We can listen for the `can-play` event to be notified when the player is ready.
	const onCanPlay = (detail: MediaCanPlayDetail, nativeEvent: MediaCanPlayEvent) => {
		// ...
	}

	return(
		<MediaPlayer
			className={`${styles.player} media-player`}
			title="Sprite Fight"
			src={src}
			crossOrigin
			playsInline
			onProviderChange={onProviderChange}
			onCanPlay={onCanPlay}
			ref={player}
		>
			<MediaProvider>
				<Poster
					className={`${styles.poster} vds-poster`}
					src={propPoster}
					alt={propDescription}
				/>
			</MediaProvider>

			<VideoLayout hideControls={propControlsHidden} thumbnails={propThumbnails} />
		</MediaPlayer>
	)
}