import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Flame, Shield, Cpu } from 'lucide-react';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Inside the Minerax Foundry Operations
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Witness the intense power and surgical precision of our continuous casting process. From electric furnace melting at 1600°C to automated robotic finishing.
          </p>
        </div>

        {/* Video Player Box */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-black group max-w-5xl mx-auto">
          <video
            ref={videoRef}
            src="/video.mp4"
            className="w-full aspect-video object-cover cursor-pointer"
            loop
            muted={isMuted}
            playsInline
            onClick={togglePlay}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Center Big Play Button (when paused) */}
          {!isPlaying && (
            <div 
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center cursor-pointer group/btn"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-amber-500 text-slate-950 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:bg-amber-400">
                <Play size={36} className="ml-1 fill-current" />
              </div>
            </div>
          )}

          {/* Video Control Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between z-20">
            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlay}
                className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
              </button>
              
              <button
                onClick={toggleMute}
                className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>


            </div>

            <button
              onClick={toggleFullScreen}
              className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
            >
              <Maximize2 size={20} />
            </button>
          </div>

        </div>

        {/* Feature Highlights Grid Below Video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700/60 p-6 rounded-xl flex items-start space-x-4">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg">
              <Flame size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">1600°C Electric Melting</h4>
              <p className="text-slate-400 text-sm">Ultra-clean induction furnace heating for zero-impurity steel melts.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 p-6 rounded-xl flex items-start space-x-4">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg">
              <Cpu size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Automated Robotic Pouring</h4>
              <p className="text-slate-400 text-sm">Precision temperature & flow control for flawless casting structure.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/60 p-6 rounded-xl flex items-start space-x-4">
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg">
              <Shield size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-1">Laser X-Ray Inspection</h4>
              <p className="text-slate-400 text-sm">100% non-destructive internal flaw scanning before dispatch.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
