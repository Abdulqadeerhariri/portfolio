import React from 'react';
import photo from '../assets/about.jpg';

const About = () => {
  return (
    <section className="about section px-6 py-20">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-sm uppercase tracking-widest text-emerald-300">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            About Me
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Designing user-friendly web experiences</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              I am a Full Stack Web Developer building modern responsive applications with a focus on polished UI, fast performance, and strong front-end architecture.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white">Frontend</h3>
              <p className="mt-3 text-slate-300">React.js, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+)</p>
            </article>
            <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white">Backend</h3>
              <p className="mt-3 text-slate-300">Node.js, Express.js, REST APIs, Firebase, MongoDB</p>
            </article>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-white">What I’m looking for</h3>
            <p className="mt-3 text-slate-300">Opportunities to work on meaningful products, collaborate with inspiring teams, and continue growing by solving real-world problems.</p>
          </div>
        </div>

        <div className="relative mx-auto max-w-xl overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-4 shadow-2xl">
          <img src={photo} alt="About" className="h-full w-full rounded-3xl object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/10 to-transparent p-6" />
        </div>
      </div>
    </section>
  );
};

export default About