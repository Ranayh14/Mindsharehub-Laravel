import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';
import axios from 'axios';
import EditPostModal from './Modal/EditPostModal';
import ReportPostModal from './Modal/ReportPostModal';
import DialogWrapper from './Modal/DialogWrapper';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import { Ziggy } from '@/ziggy';

export default function PostCard({ post }) {
  const { auth } = usePage().props;
  const currentUser = auth.user;
  const isOwner = currentUser.id === post.user.id;

  const [localPost, setLocalPost] = useState(post);
  const [showComments, setShowComments] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const commentForm = useForm({
    post_id: post.id,
    comment: '',
  });

  const handleLike = async () => {
    try {
        // Kirim request untuk toggle like
        const res = await axios.post(route('posts.like', { post: localPost.id }, false, Ziggy));

        // Update local state untuk reflect like status dan likes_count secara real-time
        setLocalPost(prev => ({
            ...prev,
            is_liked: res.data.status === 'liked',  // Toggle like status
            likes_count: res.data.likes_count,      // Update likes count di state
            total_comments: res.data.total_comments // Update jumlah komentar di state
        }));
    } catch (err) {
        console.error('Gagal like:', err.response);
    }
  };

  const submitComment = e => {
    e.preventDefault();
    commentForm.post((route('comments.store', {}, false, Ziggy)), {
      preserveScroll: true,
      onSuccess: () => {
        commentForm.reset();
        Inertia.reload({ only: ['posts'] });
      }
    });
  };

  const handleDelete = () => {
    if (confirm('Yakin ingin menghapus postingan ini?')) {
        Inertia.delete(route('posts.destroy', { post: localPost.id }, false, Ziggy), {
            onSuccess: () => {
                Inertia.reload({ only: ['posts'] });
            }
        });
    }
  };


  return (
    <div className="bg-[#2B1B54] text-white p-6 rounded-lg mt-6 mb-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={post.user.profile_picture ? `/storage/${post.user.profile_picture}` : '/images/default.png'}
            className="w-10 h-10 rounded-full object-cover"
            alt="User"
          />
          <div>
            <p className="font-semibold">{post.user.username}</p>
            <p className="text-xs text-gray-400">{post.created_at_human}</p>
          </div>
        </div>

        {/* Tombol aksi */}
        <div className="relative">
          <button onClick={() => setShowActions(!showActions)} className="text-xl px-2 hover:text-purple-400">
            ⋯
          </button>
          {showActions && (
            <div className="absolute right-0 mt-2 bg-gray-800 text-sm rounded shadow p-2 space-y-2 z-50 w-36">
              {isOwner ? (
                <>
                  <button 
                    onClick={() => setEditModalOpen(true)} 
                    className="w-full text-left hover:bg-purple-600 hover:text-white p-2 rounded transition-colors"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={handleDelete} 
                    className="w-full text-left hover:bg-red-600 hover:text-white p-2 rounded transition-colors"
                  >
                    Hapus
                  </button>
                  <button 
                    onClick={() => setShowActions(false)} 
                    className="w-full text-left hover:bg-gray-600 p-2 rounded transition-colors"
                  >
                    Batal
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => setReportModalOpen(true)} 
                    className="w-full text-left hover:bg-orange-600 hover:text-white p-2 rounded transition-colors"
                  >
                    Laporkan
                  </button>
                  <button 
                    onClick={() => setShowActions(false)} 
                    className="w-full text-left hover:bg-gray-600 p-2 rounded transition-colors"
                  >
                    Batal
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      <p className="mb-3">{localPost.content}</p>
      {localPost.image_path && (
        <img src={`/storage/${localPost.image_path}`} alt="Post" className="rounded mb-3 max-h-80 object-cover w-full" />
      )}

      <div className="flex items-center gap-4 text-sm">
          <button onClick={handleLike}>
              {localPost.is_liked ? '❤️' : '🤍'} {localPost.likes_count} Likes
          </button>

          <button onClick={() => setShowComments(prev => !prev)}>
              💬 {localPost.total_comments} Komentar
          </button>
      </div>

      {showComments && (
        <div className="mt-4 space-y-3">
          {post.comments.map(c => (
            <div key={c.id} className="bg-gray-700 p-2 rounded">
              <strong>{c.user.username}:</strong> {c.comment}
            </div>
          ))}

          <form onSubmit={submitComment} className="flex flex-col gap-2 mt-3">
            <textarea
              required
              className="p-2 rounded text-black"
              rows={2}
              placeholder="Tulis komentar..."
              value={commentForm.data.comment}
              onChange={e => commentForm.setData('comment', e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded w-fit self-end"
              disabled={commentForm.processing}
            >
              Kirim
            </button>
          </form>
        </div>
      )}

      {/* Modals */}
      <EditPostModal open={editModalOpen} onClose={() => setEditModalOpen(false)} post={localPost} />
      <ReportPostModal open={reportModalOpen} onClose={() => setReportModalOpen(false)} postId={localPost.id} content={localPost.content} />
    </div>
  );
}
