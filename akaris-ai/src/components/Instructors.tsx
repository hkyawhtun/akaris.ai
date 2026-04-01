import { useState } from 'react';
import { instructors } from '../data/instructors';
import type { Instructor } from '../data/instructors';

function InstructorCard({ instructor }: { instructor: Instructor }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-navy-950 border border-navy-800 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gold-500/40 transition-all">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-500/20 to-navy-800 border-2 border-gold-500/40 flex items-center justify-center mb-5 overflow-hidden shrink-0">
        {!imgError ? (
          <img
            src={instructor.image}
            alt={instructor.name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-2xl font-bold text-gold-400">{instructor.initials}</span>
        )}
      </div>

      <h3 className="text-white font-bold text-xl mb-1">{instructor.name}</h3>
      <p className="text-gold-400 text-sm font-medium">{instructor.title}</p>
      <p className="text-gold-400/80 text-sm font-medium mb-4">{instructor.subtitle}</p>
      <p className="text-slate-400 text-sm leading-relaxed">{instructor.bio}</p>
    </div>
  );
}

export default function Instructors() {
  return (
    <section id="instructors" className="bg-navy-900 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet Your Instructors
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Learn from practitioners who have built real AI systems and are passionate about
            teaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
}
