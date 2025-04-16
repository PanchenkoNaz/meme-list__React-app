'use client';

import React, { useEffect, useState } from 'react';
import EditMemeModal from '../../components/EditMemeModal';

type Meme = {
  id: number;
  title: string;
  image: string;
  likes: number;
};

const initialMemes: Meme[] = [
  {
    id: 1,
    title: 'Distracted Boyfriend',
    image: 'https://i.kym-cdn.com/entries/icons/original/000/023/732/damngina.jpg',
    likes: 42,
  },
  {
    id: 2,
    title: 'Drake Cat',
    image: 'https://i.kym-cdn.com/photos/images/original/001/345/955/9d8.png',
    likes: 35,
  },
  {
    id: 3,
    title: 'Grumpy Cat',
    image: 'https://i.kym-cdn.com/entries/icons/original/000/011/365/GRUMPYCAT.jpg',
    likes: 58,
  },
  {
    id: 4,
    title: 'Woman Yelling at a Cat',
    image: 'https://i.kym-cdn.com/entries/icons/original/000/030/157/womanyellingcat.jpg',
    likes: 66,
  },
  {
    id: 5,
    title: 'Success Kid',
    image: 'https://i.kym-cdn.com/entries/icons/original/000/000/745/success.jpg',
    likes: 77,
  },
  {
    id: 6,
    title: 'Hide the Pain Harold',
    image: 'https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg',
    likes: 29,
  },
  {
    id: 7,
    title: 'Two Buttons',
    image: 'https://i.kym-cdn.com/entries/icons/original/000/019/571/dailystruggg.jpg',
    likes: 49,
  },
  {
    id: 8,
    title: 'This is Fine',
    image: 'https://i.kym-cdn.com/entries/icons/original/000/018/012/this_is_fine.jpeg',
    likes: 68,
  },
  {
    id: 9,
    title: 'Boneca Ambalabu',
    image: 'https://i.kym-cdn.com/entries/icons/original/000/053/753/ambacover.jpg',
    likes: 33,
  },
  {
    id: 10,
    title: 'Bombardino Crocodilo',
    image: 'https://i.kym-cdn.com/entries/icons/original/000/053/420/Bombardiro_crocodilo_cover.jpg',
    likes: 51,
  },
];

export default function TablePage() {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);

  // Завантаження з localStorage або fallback
  useEffect(() => {
    const stored = localStorage.getItem('memes');
    if (stored) {
      setMemes(JSON.parse(stored));
    } else {
      setMemes(initialMemes);
      localStorage.setItem('memes', JSON.stringify(initialMemes));
    }
  }, []);

  const handleSave = (updated: Meme) => {
    const updatedList = memes.map((m) => (m.id === updated.id ? updated : m));
    setMemes(updatedList);
    localStorage.setItem('memes', JSON.stringify(updatedList));
    setSelectedMeme(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Meme Table</h1>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Title</th>
            <th className="border px-4 py-2 text-left">Likes</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {memes.map((meme) => (
            <tr key={meme.id}>
              <td className="border px-4 py-2">{meme.id}</td>
              <td className="border px-4 py-2">{meme.title}</td>
              <td className="border px-4 py-2">{meme.likes}</td>
              <td className="border px-4 py-2">
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => setSelectedMeme(meme)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedMeme && (
        <EditMemeModal
          isOpen={!!selectedMeme}
          onClose={() => setSelectedMeme(null)}
          meme={selectedMeme}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
