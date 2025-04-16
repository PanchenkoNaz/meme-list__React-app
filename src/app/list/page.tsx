'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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

export default function ListPage() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('memes');
    if (stored) {
      setMemes(JSON.parse(stored));
    } else {
      setMemes(initialMemes);
      localStorage.setItem('memes', JSON.stringify(initialMemes));
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Meme List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {memes.map((meme) => (
          <div
            key={meme.id}
            className="bg-zinc-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden border border-zinc-700"
          >
            <Image
              src={meme.image}
              alt={meme.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1 truncate">{meme.title}</h2>
              <p className="text-sm text-zinc-400 mb-2">Likes: {meme.likes}</p>
              <a
                href={meme.image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm hover:underline"
              >
                View full image
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}