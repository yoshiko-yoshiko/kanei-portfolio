'use client';

import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(
      JSON.stringify({
        level: 'error',
        type: 'error_boundary',
        message: error.message,
        digest: error.digest,
        stack: error.stack,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        timestamp: new Date().toISOString(),
      })
    );
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <AlertTriangle className="w-16 h-16 text-secondary" />
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-3">
          Something went wrong
        </h1>
        <p className="text-foreground/60 mb-8 leading-relaxed">
          予期しないエラーが発生しました。
          <br />
          もう一度お試しください。
        </p>

        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
        >
          もう一度試す
        </button>
      </div>
    </div>
  );
}
