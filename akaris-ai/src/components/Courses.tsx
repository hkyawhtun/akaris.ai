import { courses } from "../data/courses";
import type { Course } from "../data/courses";

const LEVEL_STYLES: Record<Course["level"], string> = {
  Beginner: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
  Intermediate: "text-blue-400 bg-blue-400/10 border-blue-400/30",
  Advanced: "text-gold-400 bg-gold-400/10 border-gold-400/30",
};

function CourseCard({
  course,
  onEnroll,
}: {
  course: Course;
  onEnroll: (course: string, type: string) => void;
}) {
  return (
    <div className="bg-navy-950 border border-navy-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-gold-500/40 transition-all group">
      <div className="flex items-start justify-between gap-2">
        <span className="text-3xl" aria-hidden="true">
          {course.icon}
        </span>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full border shrink-0 ${LEVEL_STYLES[course.level]}`}
        >
          {course.level}
        </span>
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-gold-400 transition-colors leading-snug">
          {course.title}
        </h3>
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
