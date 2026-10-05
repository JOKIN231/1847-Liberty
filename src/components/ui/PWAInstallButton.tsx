import React, { useState } from 'react';
import { Download, Share2, X } from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ className = '' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSModal, setShowIOSModal] = useState(false);

  // If already running in standalone PWA mode, suppress install button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#830000] hover:bg-[#5C0000] rounded-md transition-colors shadow-xs ${className}`}
        title="Install 1847 Liberty App"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Install App</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSModal(true)}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-[#830000] hover:bg-[#830000]/10 rounded border border-[#830000]/30 transition-colors ${className}`}
          title="Install on iPhone / iPad"
        >
          <Share2 className="w-3 h-3" />
          <span>Add to Home Screen</span>
        </button>

        {showIOSModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl border border-[#DED8D2]">
              <div className="flex items-center justify-between pb-3 border-b border-[#DED8D2]">
                <h3 className="font-editorial-serif text-lg font-medium text-[#171313]">
                  Install 1847 Liberty
                </h3>
                <button
                  onClick={() => setShowIOSModal(false)}
                  className="p-1 text-[#68615D] hover:text-[#171313] rounded-md"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="py-4 space-y-3 text-sm text-[#68615D]">
                <p>
                  To install 1847 Liberty on your iPhone or iPad for quick access:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-xs font-medium text-[#171313]">
                  <li>
                    Tap the <strong>Share</strong> icon in the Safari navigation bar.
                  </li>
                  <li>
                    Scroll down and select <strong>Add to Home Screen</strong>.
                  </li>
                  <li>
                    Confirm by tapping <strong>Add</strong> in the top right corner.
                  </li>
                </ol>
              </div>

              <button
                onClick={() => setShowIOSModal(false)}
                className="w-full py-2.5 text-xs font-semibold text-white bg-[#830000] rounded-lg hover:bg-[#5C0000] transition-colors"
              >
                Understood
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
