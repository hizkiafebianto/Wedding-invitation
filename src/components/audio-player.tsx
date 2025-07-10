// ✅ AudioPlayer.tsx
import { Play, Pause } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

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
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={toggleAudio}
        className="rounded-full p-3 bg-lime-900 text-white shadow-lg hover:bg-white hover:text-black cursor-pointer"
      >
        {playing ? <Pause size={20} /> : <Play size={20} />}
      </Button>
    </div>
  );
};
