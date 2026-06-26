import './index.css';

import { navigateTo } from '@devvit/web/client';
import { context, requestExpandedMode } from '@devvit/web/client';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

export const Splash = () => {
  const [audioLink, setAudioLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (audioLink.trim()) {
      console.log('Audio link submitted:', audioLink);
      // TODO: Handle audio link submission
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800">
      <div className="flex flex-col items-center gap-6 rounded-2xl bg-white/80 p-8 shadow-2xl backdrop-blur-sm dark:bg-gray-800/80">
        <img
          className="mx-auto w-32 object-contain drop-shadow-lg"
          src="/snoo.png"
          alt="Snoo"
        />
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Hey {context.username ?? 'user'} 👋
          </h1>
          <p className="text-center text-base text-gray-600 dark:text-gray-300">
            Enter an audio link to play
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="mt-2 flex flex-col items-center gap-4 w-full">
          <input
            type="text"
            value={audioLink}
            onChange={(e) => setAudioLink(e.target.value)}
            placeholder="https://example.com/audio.mp3"
            className="w-full max-w-md px-4 py-3 border-2 border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-orange-400 dark:focus:ring-orange-900"
          />
          <button
            type="submit"
            className="flex h-12 w-full max-w-md cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-[#d93900] to-[#ff4500] px-6 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95 dark:from-orange-600 dark:to-orange-700"
          >
            Submit Audio Link
          </button>
        </form>
      </div>

      <footer className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 text-[0.8em] text-gray-600 dark:text-gray-400">
        <button
          className="cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors"
          onClick={() => navigateTo('https://developers.reddit.com/docs')}
        >
          Docs
        </button>
        <span className="text-gray-300 dark:text-gray-600">|</span>
        <button
          className="cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors"
          onClick={() => navigateTo('https://www.reddit.com/r/Devvit')}
        >
          r/Devvit
        </button>
        <span className="text-gray-300 dark:text-gray-600">|</span>
        <button
          className="cursor-pointer hover:text-gray-900 dark:hover:text-white transition-colors"
          onClick={() => navigateTo('https://discord.com/invite/R7yu2wh9Qz')}
        >
          Discord
        </button>
      </footer>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Splash />
  </StrictMode>
);
