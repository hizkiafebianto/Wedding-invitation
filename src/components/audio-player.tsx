import { Play, Pause } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

type AudioPlayerProps = {
    audioRef: React.RefObject<HTMLAudioElement | null>;
};

export const AudioPlayer = ({ audioRef }: AudioPlayerProps) => {
    const [playing, setPlaying] = useState(true);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setPlaying(!playing);
    };

    return (
        <div className="fixed right-4 bottom-4 z-50">
            <Button
                onClick={toggleAudio}
                className="cursor-pointer rounded-full bg-lime-900 p-3 text-white shadow-lg hover:bg-white hover:text-black"
            >
                {playing ? <Pause size={20} /> : <Play size={20} />}
            </Button>
        </div>
    );
};
