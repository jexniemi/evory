"use client";
import React, { useState, useMemo } from "react";

type CourseType = "regular" | "honors" | "ap";

interface Course {
  name: string;
  grade: string;
  credits: number;
  courseType: CourseType;
}

const GRADE_OPTIONS: { label: string; points: number }[] = [
  { label: "A+", points: 4.0 },
  { label: "A", points: 4.0 },
  { label: "A-", points: 3.7 },
  { label: "B+", points: 3.3 },
  { label: "B", points: 3.0 },
  { label: "B-", points: 2.7 },
  { label: "C+", points: 2.3 },
  { label: "C", points: 2.0 },
  { label: "C-", points: 1.7 },
  { label: "D+", points: 1.3 },
  { label: "D", points: 1.0 },
  { label: "F", points: 0.0 },
];

const COURSE_TYPE_BONUS: Record<CourseType, number> = {
  regular: 0,
  honors: 0.5,
  ap: 1.0,
};

const COURSE_TYPE_LABELS: Record<CourseType, string> = {
  regular: "Regular",
  honors: "Honors",
  ap: "AP / IB",
};

const DEFAULT_COURSE_NAMES = [
  "English",
  "Math",
  "Science",
  "History",
  "Elective",
  "Foreign Language",
  "Art",
  "PE",
  "Computer Science",
  "Economics",
];

function getGradePoints(grade: string): number {
  return GRADE_OPTIONS.find((g) => g.label === grade)?.points ?? 0;
}

function getLetterFromGPA(gpa: number): string {
  if (gpa >= 3.85) return "A";
  if (gpa >= 3.5) return "A-";
  if (gpa >= 3.15) return "B+";
  if (gpa >= 2.85) return "B";
  if (gpa >= 2.5) return "B-";
  if (gpa >= 2.15) return "C+";
  if (gpa >= 1.85) return "C";
  if (gpa >= 1.5) return "C-";
  if (gpa >= 1.15) return "D+";
  if (gpa >= 0.5) return "D";
  return "F";
}

function getGPAColor(gpa: number): string {
  if (gpa >= 3.5) return "text-green-600 dark:text-green-400";
  if (gpa >= 3.0) return "text-blue-600 dark:text-blue-400";
  if (gpa >= 2.5) return "text-yellow-600 dark:text-yellow-400";
  if (gpa >= 2.0) return "text-orange-600 dark:text-orange-400";
  return "text-red-600 dark:text-red-400";
}

const GpaCalculator = () => {
  const [useWeighted, setUseWeighted] = useState(false);
  const [courses, setCourses] = useState<Course[]>([
    { name: "English", grade: "A", credits: 3, courseType: "regular" },
    { name: "Math", grade: "A", credits: 3, courseType: "regular" },
    { name: "Science", grade: "A", credits: 3, courseType: "regular" },
    { name: "History", grade: "A", credits: 3, courseType: "regular" },
  ]);

  const addCourse = () => {
    const nextName =
      DEFAULT_COURSE_NAMES[courses.length % DEFAULT_COURSE_NAMES.length] ||
      `Course ${courses.length + 1}`;
    setCourses([
      ...courses,
      { name: nextName, grade: "A", credits: 3, courseType: "regular" },
    ]);
  };

  const removeCourse = (index: number) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const updateCourse = (
    index: number,
    field: keyof Course,
    value: string | number,
  ) => {
    setCourses(
      courses.map((c, i) => (i === index ? { ...c, [field]: value } : c)),
    );
  };

  const { unweightedGPA, weightedGPA, totalCredits, totalQualityPoints } =
    useMemo(() => {
      let totalCredits = 0;
      let unweightedQP = 0;
      let weightedQP = 0;

      for (const course of courses) {
        const base = getGradePoints(course.grade);
        const bonus = COURSE_TYPE_BONUS[course.courseType];
        totalCredits += course.credits;
        unweightedQP += base * course.credits;
        weightedQP += (base + bonus) * course.credits;
      }

      return {
        unweightedGPA: totalCredits > 0 ? unweightedQP / totalCredits : 0,
        weightedGPA: totalCredits > 0 ? weightedQP / totalCredits : 0,
        totalCredits,
        totalQualityPoints: unweightedQP,
      };
    }, [courses]);

  const displayGPA = useWeighted ? weightedGPA : unweightedGPA;

  return (
    <div className="p-2 sm:p-4 max-w-3xl mx-auto">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <label className="label cursor-pointer gap-2">
          <input
            type="checkbox"
            className="toggle toggle-primary toggle-sm"
            checked={useWeighted}
            onChange={(e) => setUseWeighted(e.target.checked)}
          />
          <span className="label-text font-medium">
            Weighted GPA (AP/Honors)
          </span>
        </label>
      </div>

      {/* Course list */}
      <div className="space-y-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="card card-compact bg-base-200/50 border border-base-300"
          >
            <div className="card-body p-3 sm:p-4">
              <div className="flex flex-wrap gap-2 items-end">
                {/* Course name */}
                <div className="flex-1 min-w-[140px]">
                  <label className="label py-0.5">
                    <span className="label-text text-xs font-semibold uppercase tracking-wide opacity-60">
                      Course {index + 1}
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered input-sm w-full"
                    value={course.name}
                    onChange={(e) =>
                      updateCourse(index, "name", e.target.value)
                    }
                    placeholder="Course name"
                  />
                </div>

                {/* Letter grade */}
                <div className="w-20">
                  <label className="label py-0.5">
                    <span className="label-text text-xs font-semibold uppercase tracking-wide opacity-60">
                      Grade
                    </span>
                  </label>
                  <select
                    className="select select-bordered select-sm w-full"
                    value={course.grade}
                    onChange={(e) =>
                      updateCourse(index, "grade", e.target.value)
                    }
                  >
                    {GRADE_OPTIONS.map((g) => (
                      <option key={g.label} value={g.label}>
                        {g.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Credits */}
                <div className="w-20">
                  <label className="label py-0.5">
                    <span className="label-text text-xs font-semibold uppercase tracking-wide opacity-60">
                      Credits
                    </span>
                  </label>
                  <select
                    className="select select-bordered select-sm w-full"
                    value={course.credits}
                    onChange={(e) =>
                      updateCourse(index, "credits", Number(e.target.value))
                    }
                  >
                    {[1, 2, 3, 4, 5, 6].map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Course type (only visible in weighted mode) */}
                {useWeighted && (
                  <div className="w-28">
                    <label className="label py-0.5">
                      <span className="label-text text-xs font-semibold uppercase tracking-wide opacity-60">
                        Type
                      </span>
                    </label>
                    <select
                      className="select select-bordered select-sm w-full"
                      value={course.courseType}
                      onChange={(e) =>
                        updateCourse(
                          index,
                          "courseType",
                          e.target.value as CourseType,
                        )
                      }
                    >
                      {(
                        Object.entries(COURSE_TYPE_LABELS) as [
                          CourseType,
                          string,
                        ][]
                      ).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Points preview */}
                <div className="w-12 text-center pb-1">
                  <span className="text-sm font-bold opacity-70">
                    {(
                      getGradePoints(course.grade) +
                      (useWeighted ? COURSE_TYPE_BONUS[course.courseType] : 0)
                    ).toFixed(1)}
                  </span>
                </div>

                {/* Remove button */}
                <button
                  className="btn btn-ghost btn-sm btn-square text-error pb-0.5"
                  onClick={() => removeCourse(index)}
                  disabled={courses.length <= 1}
                  aria-label="Remove course"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add course button */}
      <button className="btn btn-primary btn-sm mt-4" onClick={addCourse}>
        + Add Course
      </button>

      {/* Results */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Main GPA display */}
        <div className="card bg-base-200 border border-base-300 col-span-1 sm:col-span-2">
          <div className="card-body items-center text-center py-6">
            <p className="text-sm font-semibold uppercase tracking-wide opacity-60">
              {useWeighted ? "Weighted GPA" : "Unweighted GPA"}
            </p>
            <p
              className={`text-5xl font-extrabold ${getGPAColor(displayGPA)}`}
            >
              {displayGPA.toFixed(2)}
            </p>
            <p className="text-lg opacity-70">
              {getLetterFromGPA(unweightedGPA)}{" "}
              average&nbsp;&nbsp;·&nbsp;&nbsp;
              {totalCredits} credit{totalCredits !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Breakdown card */}
        <div className="card bg-base-200 border border-base-300">
          <div className="card-body py-4">
            <h3 className="card-title text-sm uppercase tracking-wide opacity-60">
              Breakdown
            </h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Total Credits</span>
                <span className="font-semibold">{totalCredits}</span>
              </div>
              <div className="flex justify-between">
                <span>Quality Points</span>
                <span className="font-semibold">
                  {totalQualityPoints.toFixed(1)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Unweighted GPA</span>
                <span className="font-semibold">
                  {unweightedGPA.toFixed(2)}
                </span>
              </div>
              {useWeighted && (
                <div className="flex justify-between">
                  <span>Weighted GPA</span>
                  <span className="font-semibold">
                    {weightedGPA.toFixed(2)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Standing card */}
        <div className="card bg-base-200 border border-base-300">
          <div className="card-body py-4">
            <h3 className="card-title text-sm uppercase tracking-wide opacity-60">
              Academic Standing
            </h3>
            <div className="space-y-1 text-sm">
              {unweightedGPA >= 3.9 && (
                <div className="badge badge-success badge-sm">
                  Summa Cum Laude
                </div>
              )}
              {unweightedGPA >= 3.5 && unweightedGPA < 3.9 && (
                <div className="badge badge-success badge-sm">
                  Magna Cum Laude
                </div>
              )}
              {unweightedGPA >= 3.0 && unweightedGPA < 3.5 && (
                <div className="badge badge-info badge-sm">Cum Laude</div>
              )}
              {unweightedGPA >= 3.5 && (
                <div className="badge badge-primary badge-sm">
                  {"Dean's List eligible"}
                </div>
              )}
              {unweightedGPA < 2.0 && (
                <div className="badge badge-error badge-sm">
                  Academic Probation risk
                </div>
              )}
              {unweightedGPA >= 2.0 && unweightedGPA < 3.0 && (
                <div className="badge badge-warning badge-sm">
                  Good Standing
                </div>
              )}
              <p className="pt-1 opacity-70 text-xs">
                A 3.0+ GPA meets most scholarship and grad school requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Per-course table */}
      <div className="overflow-x-auto mt-6">
        <table className="table table-sm w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Course</th>
              <th className="text-center">Grade</th>
              <th className="text-center">Points</th>
              <th className="text-center">Credits</th>
              <th className="text-center">Quality Pts</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => {
              const base = getGradePoints(course.grade);
              const bonus = useWeighted
                ? COURSE_TYPE_BONUS[course.courseType]
                : 0;
              const pts = base + bonus;
              return (
                <tr key={index}>
                  <td>
                    {course.name}
                    {useWeighted && course.courseType !== "regular" && (
                      <span className="ml-1 badge badge-xs badge-outline">
                        {COURSE_TYPE_LABELS[course.courseType]}
                      </span>
                    )}
                  </td>
                  <td className="text-center font-semibold">{course.grade}</td>
                  <td className="text-center">{pts.toFixed(1)}</td>
                  <td className="text-center">{course.credits}</td>
                  <td className="text-center font-semibold">
                    {(pts * course.credits).toFixed(1)}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot className="font-bold bg-base-200">
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td className="text-center">{totalCredits}</td>
              <td className="text-center">
                {(displayGPA * totalCredits).toFixed(1)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default GpaCalculator;
