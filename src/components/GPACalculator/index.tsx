"use client";
import CountUpResult from "@/components/CountUpResult/CountUpResult";
import DropdownInput from "@/components/common/DropdownInput/DropdownInput";
import Label from "@/components/common/Label/Label";
import React, { useState } from "react";

const GpaCalculator = () => {
  const [defaultValue, setDefaultValue] = useState(5);
  const [courses, setCourses] = useState([{ grade: defaultValue, credits: 5 }]);
  const isUniversity = defaultValue === 5;

  const addCourse = () => {
    setCourses([
      ...courses,
      { grade: isUniversity ? 5 : 10, credits: isUniversity ? 5 : 1 },
    ]);
  };

  const onSelectDefaultValue = (value: number) => {
    const isUniversity = value === 5;
    setDefaultValue(value);
    setCourses(
      courses.map((course) => ({
        ...course,
        grade: value,
        credits: isUniversity ? 5 : 1,
      }))
    );
  };

  const calculateGPA = () => {
    const totalPoints = courses.reduce(
      (acc, course) => acc + course.grade * course.credits,
      0
    );
    const totalCredits = courses.reduce(
      (acc, course) => acc + course.credits,
      0
    );
    return Number((totalPoints / totalCredits).toFixed(2));
  };

  return (
    <div className="p-4">
      <div className="w-60">
        <DropdownInput
          selectedValue={defaultValue}
          values={[5, 10]}
          setSelectedValue={onSelectDefaultValue}
          labels={["Korkeakoulu", "Peruskoulu / Lukio"]}
        />
      </div>
      {courses.map((course, index) => (
        <div key={index} className="mb-4 flex flex-col mt-5">
          <h2>
            <b>{`Kurssi ${index + 1}`}</b>
          </h2>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <Label text={`Arvosana`} />
              <input
                type="number"
                className={`input input-bordered mr-2 w-28 ${
                  !isUniversity ? "w-60" : ""
                }`}
                value={course.grade}
                onChange={(e) =>
                  setCourses(
                    courses.map((c, i) =>
                      i === index ? { ...c, grade: Number(e.target.value) } : c
                    )
                  )
                }
              />
            </div>
            <div className={`flex flex-col ${!isUniversity ? "hidden" : ""}`}>
              <Label text={`Opintopisteet`} />
              <input
                type="number"
                className="input input-bordered w-28"
                value={course.credits}
                onChange={(e) =>
                  setCourses(
                    courses.map((c, i) =>
                      i === index
                        ? { ...c, credits: Number(e.target.value) }
                        : c
                    )
                  )
                }
              />
            </div>
          </div>
        </div>
      ))}
      <button className="btn btn-primary mb-4" onClick={addCourse}>
        Lisää kurssi
      </button>
      <button
        className={
          "btn btn-error mb-4 ml-2" + (courses.length === 1 ? " hidden" : "")
        }
        onClick={() =>
          setCourses(
            courses.filter((course, index) => index !== courses.length - 1)
          )
        }
      >
        Poista kurssi
      </button>
      <div className="mt-5">
        <CountUpResult
          className="justify-center"
          end={calculateGPA()}
          decimals={2}
          duration={1}
          decimal=","
          label="Opintojesi keskiarvo:"
          extraStyles="bg-pastelorange"
        />
      </div>
    </div>
  );
};

export default GpaCalculator;
