import React from 'react';
import './component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSms, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className="contact section px-6 py-20">
      <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2">
        <div className="rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-widest text-emerald-300">Get in Touch</p>
              <h2 className="text-4xl font-semibold text-white">I'd love to hear from you</h2>
              <p className="max-w-xl text-slate-300">If you have an idea, a project, or just want to say hi, feel free to send a message and I’ll respond as soon as possible.</p>
            </div>

            <div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <div className="rounded-3xl bg-emerald-400/10 p-4 text-emerald-300">
                <FontAwesomeIcon icon={faSms} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-emerald-300">Email</p>
                <p className="mt-2 text-lg font-semibold text-white">qadeerhariri700@outlook.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <div className="flex items-center gap-4">
                <div className="rounded-3xl bg-slate-800/90 p-4 text-white">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-emerald-300">Social</p>
                  <p className="mt-2 text-lg font-semibold text-white">Instagram • Facebook • GitHub • LinkedIn</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                <span className="rounded-2xl bg-white/5 px-4 py-2">Instagram</span>
                <span className="rounded-2xl bg-white/5 px-4 py-2">Facebook</span>
                <span className="rounded-2xl bg-white/5 px-4 py-2">GitHub</span>
                <span className="rounded-2xl bg-white/5 px-4 py-2">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-4xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl">
          <div className="grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-300">First Name</label>
                <input type="text" className="input-field mt-2 w-full" placeholder="First name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300">Last Name</label>
                <input type="text" className="input-field mt-2 w-full" placeholder="Last name" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">Email</label>
              <input type="email" className="input-field mt-2 w-full" placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">Message</label>
              <textarea className="input-field mt-2 h-36 w-full resize-none" placeholder="Write your message..." />
            </div>

            <button className="button-primary w-full rounded-full px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact