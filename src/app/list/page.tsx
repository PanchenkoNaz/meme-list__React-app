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
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Meme List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {memes.map((meme) => (
          <div key={meme.id} className="border p-4 rounded shadow-sm">
            <Image
              src={meme.image}
              alt={meme.title}
              width={300}
              height={200}
              className="rounded w-full h-[200px] object-cover mb-2"
            />
            <h2 className="font-semibold">{meme.title}</h2>
            <p className="text-sm text-gray-600">Likes: {meme.likes}</p>
            <a
              href={meme.image}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm underline"
            >
              View full image
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
