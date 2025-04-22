import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { Ziggy } from '@/ziggy';
import DialogWrapper from './DialogWrapper';

export default function EditPostModal({ open, onClose, post }) {
  // post: { id, content, image_path }
  const { data, setData, put, processing, reset } = useForm({
    content: post?.content || '',
    image: null,
  });

  // Sync when post changes
  useEffect(() => {
    setData('content', post?.content || '');
  }, [post]);

  function submit(e) {
    e.preventDefault();
    put(
      route('posts.update', { post: post.id }, false, Ziggy),
      {
        forceFormData: true,
        onSuccess: () => {
          reset();
          onClose();
        },
      }
    );
  }

  return (
    <DialogWrapper open={open} onClose={onClose} title="Edit Postingan">
      <form onSubmit={submit} className="space-y-4">
        <textarea
          required
          rows={4}
          value={data.content}
          onChange={e => setData('content', e.target.value)}
          className="w-full border rounded p-2 resize-none"
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setData('image', e.target.files[0])}
          className="block w-full text-sm"
        />
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-sm rounded"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={processing}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded"
          >
            Simpan
          </button>
        </div>
      </form>
    </DialogWrapper>
  );
}