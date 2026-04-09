import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle, faTwitter, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faComputer, faHandPaper } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <section className="hero min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse gap-12 px-6 md:flex-row md:items-center md:justify-between">
        <div className="hero-copy max-w-2xl space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-2 text-xs uppercase tracking-widest text-emerald-300">
            portfolio • ui design • responsive
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Hello, I'm QADEER HARIRI <FontAwesomeIcon icon={faHandPaper} className="inline-block text-amber-300" />
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              I build modern responsive web applications using React, Tailwind CSS and clean UX. Explore my latest work and let’s build something great together.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
              Contact Me
            </Link>
            <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-300">
              View Projects
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="icon-chip">GitHub</div>
            <div className="icon-chip">LinkedIn</div>
            <div className="icon-chip">Twitter</div>
            <div className="icon-chip">Instagram</div>
          </div>
        </div>

        <div className="hero-visual flex justify-center">
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900/80 p-10 shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/15 via-transparent to-sky-500/10" />
            <div className="relative flex h-72 w-72 items-center justify-center text-8xl text-emerald-300 sm:h-80 sm:w-80">
              <FontAwesomeIcon icon={faComputer} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home