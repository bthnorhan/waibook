import { useRef, useState } from 'react';

import Image from 'next/image';

export const VideoPlayer = ({ src, className = '' }) => {
	const [playVideo, setPlayVideo] = useState(false);

	const videoPlayer = useRef();

	const videoToggle = () => {
		setPlayVideo(p => !p);
		videoPlayer.current.paused ? videoPlayer.current.play() : videoPlayer.current.pause();
	};

	return (
		<div className={`relative cursor-pointer ${className}`} onClick={videoToggle}>
			<div
				id='video-overlay'
				className={`absolute flex justify-center items-center right-0 left-0 top-0 bottom-0 bg-slate-900/70 rounded-2xl ${
					playVideo ? 'hidden' : ''
				}`}
			>
				<div className='bg-gray-50 w-20 h-20 flex items-center justify-center rounded-full'>
					<Image src='/assets/svgs/play.svg' alt='Play' width={64} height={64} />
				</div>
			</div>
			<video className='rounded-2xl' ref={videoPlayer} loop>
				<source src={src} />
			</video>
		</div>
	);
};
