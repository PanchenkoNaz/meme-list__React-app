'use client';

import { useState } from 'react';

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
    image: 'https://i.imgur.com/Jg2tV.jpg',
    likes: 42,
  },
  {
    id: 2,
    title: 'Drake Hotline Bling',
    image: 'https://i.imgur.com/NUNLHPZ.jpg',
    likes: 35,
  },
  {
    id: 3,
    title: 'Grumpy Cat',
    image: 'https://i.imgur.com/MZ3sK3v.jpg',
    likes: 58,
  },
];

const TablePage = () => {
  const [memes, setMemes] = useState(initialMemes);

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
                <button className="text-blue-600 hover:underline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
