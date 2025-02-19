import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

const posts = [
  {
    id: 'deepseek-alternativa-open-source-a-chatgpt-e-gemini',
    title: "DeepSeek: L'Alternativa Open Source a ChatGPT e Gemini",
    excerpt:
      'Analisi approfondita di DeepSeek, la sua natura open source, i costi delle API e le principali differenze rispetto ai concorrenti come ChatGPT e Gemini.',
    date: '1 Febbraio 2025',
    readTime: '2 min',
    image:
      'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=930,h=418,fit=crop/mk39w0PZ1DIe7Dp6/deepseek-AMql9Qpg3vS6lrJ2.jpeg',
  },
  {
    id: 'gpt-la-rivoluzione-dellintelligenza-artificiale-nel-business',
    title: 'GPT: La Rivoluzione dell’Intelligenza Artificiale nel Business',
    excerpt:
      'Scopri come i modelli GPT stanno trasformando il business, ottimizzando processi e creando nuove opportunità nel mondo digitale.',
    date: '29 Novembre 2024',
    readTime: '3 min',
    image: '/src/images/gpt.png',
  },
];

function Blog() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-center mb-20">Blog</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-black/40 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-contain bg-black p-2 rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <span>
                    {format(new Date(post.date), 'd MMMM yyyy', { locale: it })}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                <p className="text-gray-300">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
