import React from 'react';
import youtube from '../assets/youtube.jpeg';
import weather from '../assets/weather.jpeg';
import netflex from '../assets/netflix.jpeg';

const Project = () => {
  const cards = [
    {
      title: 'YouTube clone',
      image: youtube,
      description: 'A functional clone of YouTube with search, playback, and category filtering built using React and RapidAPI.',
    },
    {
      title: 'Weather App',
      image: weather,
      description: 'A responsive weather dashboard that reads live forecasts from OpenWeather API and displays clean UI summaries.',
    },
    {
      title: 'Netflix clone',
      image: netflex,
      description: 'A Netflix-style interface with dynamic movie listings, posters, and smooth responsive presentation.',
    },
  ];

  return (
    <section id="projects" className="projects section px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-10 text-center">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-widest text-emerald-300">Recent Work</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Development Portfolio & Projects</h2>
          <p className="mx-auto max-w-2xl text-slate-400">A selection of responsive applications and polished UI builds showing strong React and design skills.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((project, index) => (
            <article key={index} className="rounded-4xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl transition hover:-translate-y-1 hover:border-emerald-300/20 hover:bg-slate-900/95">
              <img src={project.image} alt={project.title} className="mb-6 h-52 w-full rounded-3xl object-cover" />
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-slate-400">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project