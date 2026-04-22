import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = 0.3;

        const handleFirstClick = () => {
            if (!hasStarted) {
                audio.play().then(() => {
                    setIsPlaying(true);
                    setHasStarted(true);
                }).catch(() => { });
                window.removeEventListener('click', handleFirstClick);
            }
        };

        window.addEventListener('click', handleFirstClick);
        return () => window.removeEventListener('click', handleFirstClick);
    }, [hasStarted]);

    const toggle = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
            setHasStarted(true);
        }
    };

    return (
        <>
            <audio ref={audioRef} loop src="/music/bg.mp3" />
            <button
                onClick={toggle}
                title={isPlaying ? 'Pause music' : 'Play music'}
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    zIndex: 9999,
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: 'none',
                    // background: '#111',
                    color: 'text-muted-foreground dark:text-gray-500 ',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: hasStarted ? 1 : 0.5,
                    transition: 'opacity 0.3s',
                }}
            >
                {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
        </>
    );
}
