import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "@phosphor-icons/react";
const A = import.meta.env.BASE_URL + "assets/";

export function Demo() {
  const [mode, setMode] = useState<"together" | "solo">("together");
  const [playing, setPlaying] = useState(false);
  const tablet = useRef<HTMLVideoElement>(null);
  const phone = useRef<HTMLVideoElement>(null);
  const solo = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    setPlaying(false);
    [tablet, phone, solo].forEach((r) => r.current?.pause());
  }, [mode]);
  async function toggle() {
    const videos =
      mode === "together" ? [tablet.current, phone.current] : [solo.current];
    if (playing) {
      videos.forEach((v) => v?.pause());
      setPlaying(false);
    } else {
      try {
        await Promise.all(videos.map((v) => v?.play()));
        setPlaying(true);
      } catch {
        videos.forEach((v) => v?.pause());
        setPlaying(false);
      }
    }
  }
  return (
    <section id="demo" className="demo section">
      <div className="section-top">
        <div>
          <span className="eyebrow">SEE THE PRODUCT IN ACTION</span>
          <h2>
            One story. Two different roles.
          </h2>
        </div>
        <p>
          Watch the child describe a picture on the tablet while the parent chooses the matching picture on the phone.
        </p>
      </div>
      <div className="demo-toolbar">
        <div
          className="segmented"
          role="tablist"
          aria-label="Demo experience"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
              e.preventDefault();
              const next = mode === "together" ? "solo" : "together";
              setMode(next);
              document.getElementById(next + "-tab")?.focus();
            }
          }}
        >
          <button
            role="tab"
            id="together-tab"
            aria-controls="demo-panel"
            aria-selected={mode === "together"}
            tabIndex={mode === "together" ? 0 : -1}
            onClick={() => setMode("together")}
          >
            Create together
          </button>
          <button
            role="tab"
            id="solo-tab"
            aria-controls="demo-panel"
            aria-selected={mode === "solo"}
            tabIndex={mode === "solo" ? 0 : -1}
            onClick={() => setMode("solo")}
          >
            Practice on your own
          </button>
        </div>
        <button className="text-button playback" onClick={toggle}>
          {playing ? <Pause weight="fill" /> : <Play weight="fill" />}
          {playing ? "Pause demo" : "Play demo"}
        </button>
      </div>
      <div
        id="demo-panel"
        className={`demo-stage ${mode}`}
        role="tabpanel"
        aria-labelledby={mode === "together" ? "together-tab" : "solo-tab"}
      >
        {mode === "together" ? (
          <>
            <div className="demo-tablet">
              <div className="device-caption">
                <span>01 / CHILD</span>
                <span>Describe the picture.</span>
              </div>
              <video
                ref={tablet}
                src={A + "parent-web.mp4"}
                poster={A + "parent-poster.jpg"}
                loop
                muted
                playsInline
                controls
                preload="none"
                aria-label="Child tablet storytelling demo"
              />
            </div>
            <div className="demo-phone">
              <div className="device-caption">
                <span>02 / PARENT</span>
              </div>
              <video
                ref={phone}
                src={A + "child-web.mp4"}
                poster={A + "child-poster.jpg"}
                loop
                muted
                playsInline
                controls
                preload="none"
                aria-label="Parent phone storytelling demo"
              />
            </div>
          </>
        ) : (
          <>
            <div className="solo-copy">
              <span className="eyebrow">A MOMENT FOR YOURSELF</span>
              <h3>
                Keep the story.
                <br />
                Keep learning.
              </h3>
              <p>
                Revisit familiar stories. Match words with pictures, practice
                listening, and build confidence at your own pace.
              </p>
              <ul>
                <li>Explore vocabulary in context</li>
                <li>Practice listening and writing</li>
                <li>Record and reflect on your speaking</li>
              </ul>
            </div>
            <video
              ref={solo}
              src={A + "practice-demo.mp4"}
              controls
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Parent individual vocabulary practice demo"
            />
          </>
        )}
      </div>
      <div className="demo-footnote">
        <span>Product prototype · A preview of the Our Story experience</span>
        <span>Made for real conversations</span>
      </div>
    </section>
  );
}
