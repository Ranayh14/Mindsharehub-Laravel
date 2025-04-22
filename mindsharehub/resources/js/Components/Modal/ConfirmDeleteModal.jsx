import React from 'react';

/**
 * A simple confirmation modal without headless-ui dependencies.
 */
export default function ConfirmDeleteModal({ open, onClose, onConfirm, message = 'Anda yakin ingin menghapus item ini?' }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h3 className="text-lg font-medium mb-4">Konfirmasi</h3>
        <p className="mb-6 text-gray-700">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded text-sm hover:bg-gray-300"
          >
            Batal
          </button>
          <button
            onClick={() => { onConfirm(); onClose(); }}
            className="px-4 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700"
          >
            Ya, Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
