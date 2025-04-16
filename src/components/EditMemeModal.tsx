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
    if (!image.endsWith('.jpg')) return alert('Image must be a JPG URL');
    if (likes < 0 || likes > 99) return alert('Likes must be 0-99');

    onSave({ ...meme, title, image, likes });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-zinc-900 text-white p-6 rounded-lg shadow-xl max-w-md w-full border border-zinc-700">
          <Dialog.Title className="text-xl font-semibold mb-5">Edit Meme</Dialog.Title>

          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">
                Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter meme title"
                className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium mb-1">
                Image URL (.jpg)
              </label>
              <input
                id="image"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://..."
                className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="likes" className="block text-sm font-medium mb-1">
                Likes (0–99)
              </label>
              <input
                id="likes"
                type="number"
                value={likes}
                onChange={(e) => setLikes(Number(e.target.value))}
                placeholder="0–99"
                className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded bg-zinc-700 hover:bg-zinc-600 transition text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white transition text-sm"
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
