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
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 rounded shadow max-w-md w-full">
          <Dialog.Title className="text-lg font-bold mb-4">Edit Meme</Dialog.Title>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Image URL (.jpg)</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Likes (0-99)</label>
              <input
                type="number"
                value={likes}
                onChange={(e) => setLikes(Number(e.target.value))}
                className="w-full border px-3 py-2 rounded"
              />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
                Cancel
              </button>
              <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">
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
