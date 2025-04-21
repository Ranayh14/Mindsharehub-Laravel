import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Index() {
  const { diaries } = usePage().props;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Diary</h1>
      {diaries.length === 0 ? (
        <p>Belum ada diary.</p>
      ) : (
        diaries.map((diary) => (
          <div key={diary.id} className="mb-4 border p-4 rounded">
            <p>{diary.content}</p>
          </div>
        ))
      )}
    </div>
  );
}
