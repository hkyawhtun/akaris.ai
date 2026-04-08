import { courses } from "../data/courses";
import type { Course } from "../data/courses";

const LEVEL_STYLES: Record<Course["level"], string> = {
  Beginner: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  Intermediate: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  Advanced: "text-gold-400 bg-gold-400/10 border-gold-400/30",
  General: "text-blue-400 bg-blue-200/10 border-blue-400/30",
};

function CourseCard({
  course,
  onEnroll,
}: {
  course: Course;
  onEnroll: (course: string, type: string) => void;
}) {
  return (
    <div className="bg-navy-950 border border-navy-800 rounded-2xl overflow-hidden flex flex-col gap-0 hover:border-gold-500/40 transition-all group">
      {/* Cover Image */}
      <div className="relative w-full bg-navy-900 overflow-hidden aspect-video">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col flex-1">
            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-gold-400 transition-colors leading-snug">
              {course.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1">
                {course.duration}
              </span>
              <div className="text-right">
                <p className="text-lg font-semibold text-white">
                  AUD {course.price}
                </p>
                {course.originalPrice ? (
                  <p className="text-slate-500 text-xs line-through">
                    AUD {course.originalPrice}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <span
            className={`text-xs font-semibold px-3 py-2 rounded-lg border shrink-0 ${LEVEL_STYLES[course.level]}`}
          >
            {course.level}
          </span>
        </div>

        <div>
          <p className="text-slate-400 text-sm leading-relaxed">
            {course.description}
          </p>
        </div>

        <ul className="mt-auto flex flex-col gap-1.5">
          {course.highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2 text-slate-400 text-sm"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"
                aria-hidden="true"
              />
              {h}
            </li>
          ))}
        </ul>

        <button
          onClick={() => onEnroll(course.title, "Course Enrollment")}
          className="mt-2 text-gold-400 hover:text-gold-300 text-sm font-semibold flex items-center gap-1 transition-colors w-fit"
        >
          Enroll Now <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

export default function Courses({
  onEnroll,
}: {
  onEnroll: (course: string, type: string) => void;
}) {
  return (
    <section id="courses" className="bg-navy-900 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Courses
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Structured learning paths designed to take you from curious beginner
            to confident AI practitioner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} onEnroll={onEnroll} />
          ))}
        </div>
      </div>
    </section>
  );
}
