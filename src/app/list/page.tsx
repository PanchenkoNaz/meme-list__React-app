'use client';

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

const ListPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Meme List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {memes.map((meme) => (
          <div
            key={meme.id}
            className="border rounded-lg shadow p-4 hover:shadow-md transition"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={meme.image}
              alt={meme.title}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="text-lg font-semibold">{meme.title}</h2>
            <p className="text-sm text-gray-600">Likes: {meme.likes}</p>
            <a
              href={meme.image}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm mt-1 inline-block"
            >
              View full image
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPage;
