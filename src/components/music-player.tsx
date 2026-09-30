import { useEffect, useRef, useState } from "react";
import { Music, Pause, Play, Volume2 } from "lucide-react";

/**
 * Drop the final instrumental track URL here (e.g. an uploaded asset URL).
 * While it is empty the player shows a friendly "coming soon" state.
 */
const TRACK_URL = "";
const TRACK_TITLE = "Calm instrumental";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  const toggle = () => {
    const el = audioRef.current;
    if (!el || !TRACK_URL) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      void el.play();
      setPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 print:hidden">
      {TRACK_URL ? (
        <audio ref={audioRef} src={TRACK_URL} loop preload="none" />
      ) : null}

      <div className="flex items-center gap-3 rounded-full border border-border/80 bg-card/90 px-3 py-2 shadow-[var(--shadow-soft)] backdrop-blur">
        <button
          type="button"
          onClick={TRACK_URL ? toggle : () => setOpen((v) => !v)}
          aria-label={TRACK_URL ? (playing ? "Pause music" : "Play music") : "About background music"}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {TRACK_URL ? (
            playing ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="ml-0.5 h-4 w-4" />
            )
          ) : (
            <Music className="h-4 w-4" />
          )}
        </button>

        {TRACK_URL ? (
          <div className="flex min-w-0 items-center gap-2">
            <Volume2 className="h-4 w-4 shrink-0 text-muted-foreground" />
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              aria-label="Volume"
              onChange={(e) => setVolume(Number(e.target.value))}
              className="h-1 w-24 cursor-pointer accent-[var(--gold)]"
            />
            <span className="sr-only">{TRACK_TITLE}</span>
          </div>
        ) : open ? (
          <p className="max-w-[13rem] text-xs leading-snug text-muted-foreground">
            A calm instrumental will play here once the track is added.
          </p>
        ) : null}
      </div>
    </div>
  );
}
