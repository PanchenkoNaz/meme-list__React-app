'use client';

import React from 'react';
import Image from 'next/image';

type Meme = {
  id: number;
  title: string;
  image: string;
  likes: number;
};

const memes: Meme[] = [
  {
    id: 1,
    title: 'Distracted Boyfriend',
    image: 'https://res.cloudinary.com/dckwg3wvh/image/upload/v1713162016/memes/distracted.jpg',
    likes: 42,
  },
  {
    id: 2,
    title: 'Drake Hotline Bling',
    image: 'https://res.cloudinary.com/dckwg3wvh/image/upload/v1713162016/memes/drake.jpg',
    likes: 35,
  },
  {
    id: 3,
    title: 'Grumpy Cat',
    image: 'https://res.cloudinary.com/dckwg3wvh/image/upload/v1713162016/memes/grumpy.jpg',
    likes: 58,
  },
  {
    id: 4,
    title: 'Woman Yelling at a Cat',
    image: 'https://res.cloudinary.com/dckwg3wvh/image/upload/v1713162016/memes/cat.jpg',
    likes: 66,
  },
  {
    id: 5,
    title: 'Success Kid',
    image: 'https://res.cloudinary.com/dckwg3wvh/image/upload/v1713162016/memes/success.jpg',
    likes: 77,
  },
  {
    id: 6,
    title: 'Hide the Pain Harold',
    image: 'https://res.cloudinary.com/dckwg3wvh/image/upload/v1713162016/memes/harold.jpg',
    likes: 29,
  },
  {
    id: 7,
    title: 'Two Buttons',
    image: 'https://res.cloudinary.com/dckwg3wvh/image/upload/v1713162016/memes/buttons.jpg',
    likes: 49,
  },
  {
    id: 8,
    title: 'This is Fine',
    image: 'https://res.cloudinary.com/dckwg3wvh/image/upload/v1713162016/memes/fine.jpg',
    likes: 68,
  },
  {
    id: 9,
    title: 'Leonardo Cheers',
    image: 'https://res.cloudinary.com/dckwg3wvh/image/upload/v1713162016/memes/leo.jpg',
    likes: 33,
  },
  {
    id: 10,
    title: 'Change My Mind',
    image: 'https://res.cloudinary.com/dckwg3wvh/image/upload/v1713162016/memes/change.jpg',
    likes: 51,
  },
];

export default function TablePage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Meme Table</h1>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Likes</th>
          </tr>
        </thead>
        <tbody>
          {memes.map((meme) => (
            <tr key={meme.id}>
              <td className="border px-4 py-2 text-center">{meme.id}</td>
              <td className="border px-4 py-2">{meme.title}</td>
              <td className="border px-4 py-2">
                <Image
                  src={meme.image}
                  alt={meme.title}
                  width={100}
                  height={60}
                  className="rounded object-cover"
                />
              </td>
              <td className="border px-4 py-2 text-center">{meme.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
