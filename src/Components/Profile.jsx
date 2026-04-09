import React from 'react';
import profile from '../assets/about.jpg';
import { faWhatsapp, faTelegram, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <section className="profile section px-6 py-20">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl">
          <div className="mx-auto h-72 w-72 overflow-hidden rounded-full border-4 border-emerald-400 bg-slate-950 sm:h-80 sm:w-80">
            <img src={profile} alt="Profile" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-emerald-300">Personal Profile</p>
            <h2 className="text-4xl font-semibold text-white">AbdulQadir Hariri</h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">A dedicated web developer focused on responsive interfaces, polished user experiences, and projects that feel modern across screens.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-slate-300 shadow-lg">
              <p className="text-sm uppercase tracking-widest text-emerald-300">Handle</p>
              <p className="mt-3 text-lg font-semibold text-white">@hariri.code-HC700</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 text-slate-300 shadow-lg">
              <p className="text-sm uppercase tracking-widest text-emerald-300">Email</p>
              <p className="mt-3 text-lg font-semibold text-white">qadeerhariri700@outlook.com</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="rounded-3xl bg-emerald-400/10 p-4 text-emerald-300">
                <FontAwesomeIcon icon={faPhone} className="text-2xl" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-emerald-300">Contact</p>
                <p className="mt-2 text-lg font-semibold text-white">+93 730 312 961</p>
                <p className="text-lg font-semibold text-white">+93 796 369 723</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-lg">
            <p className="text-sm uppercase tracking-widest text-emerald-300">Social</p>
            <div className="mt-4 flex flex-wrap gap-3 text-3xl">
              <span className="rounded-3xl bg-green-600/90 p-3 text-white"><FontAwesomeIcon icon={faWhatsapp} /></span>
              <span className="rounded-3xl bg-blue-600/90 p-3 text-white"><FontAwesomeIcon icon={faFacebook} /></span>
              <span className="rounded-3xl bg-pink-600/90 p-3 text-white"><FontAwesomeIcon icon={faInstagram} /></span>
              <span className="rounded-3xl bg-sky-500/90 p-3 text-white"><FontAwesomeIcon icon={faTelegram} /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile