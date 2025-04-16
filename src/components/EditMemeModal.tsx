'use client';

import { Dialog } from '@headlessui/react';
import { useState } from 'react';

type Meme = {
  id: number;
  title: string;
  image: string;
  likes: number;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  meme: Meme;
  onSave: (updated: Meme) => void;
};

const EditMemeModal = ({ isOpen, onClose, meme, onSave }: Props) => {
  const [title, setTitle] = useState(meme.title);
  const [image, setImage] = useState(meme.image);
  const [likes, setLikes] = useState(meme.likes);

  const handleSave = () => {
    if (title.length < 3 || title.length > 100) return alert('Title must be 3-100 chars');
    if (!image.match(/^https?:\/\/.*\.(jpg|jpeg)$/i)) return alert('Image must be a valid JPG URL');
    if (likes < 0 || likes > 99) return alert('Likes must be 0-99');

    onSave({ ...meme, title, image, likes });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-zinc-900 text-white p-6 rounded-xl shadow-xl w-full max-w-md">
          <Dialog.Title className="text-xl font-semibold mb-6 text-center">Edit Meme</Dialog.Title>

          <div className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Meme title"
                className="w-full px-3 py-2 rounded bg-zinc-800 border border-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Image URL (.jpg)</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://...jpg"
                className="w-full px-3 py-2 rounded bg-zinc-800 border border-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Likes (0–99)</label>
              <input
                type="number"
                min={0}
                max={99}
                value={likes}
                onChange={(e) => setLikes(Number(e.target.value))}
                className="w-full px-3 py-2 rounded bg-zinc-800 border border-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded bg-zinc-700 text-sm hover:bg-zinc-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-blue-600 text-white text-sm hover:bg-blue-500 transition"
              >
                Save
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EditMemeModal;