'use client';

import { useState } from 'react';
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
    image: 'https://api.memegen.link/images/distracted-boyfriend/you/me.jpg',
    likes: 42,
  },
  {
    id: 2,
    title: 'Drake Hotline Bling',
    image: 'https://api.memegen.link/images/drake/prefer/this.jpg',
    likes: 35,
  },
  {
    id: 3,
    title: 'Grumpy Cat',
    image: 'https://api.memegen.link/images/grumpy/I_had_fun_once/It_was_awful.jpg',
    likes: 58,
  },
];

const TablePage = () => {
  const [memes, setMemes] = useState(initialMemes);
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Meme Table</h1>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
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
          onSave={(updated) => {
            setMemes((prev) =>
              prev.map((m) => (m.id === updated.id ? updated : m))
            );
          }}
        />
      )}
    </div>
  );
};

export default TablePage;
