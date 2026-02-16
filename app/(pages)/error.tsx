'use client';

import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <AlertTriangle className="w-16 h-16 text-[#f97316]" />
        </div>

        <h1 className="text-2xl font-bold text-[#1a1a1a] mb-3">
          Something went wrong
        </h1>
        <p className="text-[#1a1a1a]/60 mb-8 leading-relaxed">
          予期しないエラーが発生しました。
          <br />
          もう一度お試しください。
        </p>

        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#10b981] text-white font-medium rounded-lg hover:bg-[#059669] transition-colors"
        >
          もう一度試す
        </button>
      </div>
    </div>
  );
}
