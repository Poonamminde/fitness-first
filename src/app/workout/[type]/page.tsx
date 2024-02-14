"use client";
import React from "react";
import "./page.css";

const page = () => {
  const [workout, setWorkout] = React.useState<any | null>(null);
  React.useEffect(() => {
    getWorkout();
  }, []);
  const getWorkout = () => {
    const data: any = {
      type: "Chest",
      imageUrl:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      durationInMin: 30,
      exercises: [
        {
          exercise: "Flat Bench Press",
          videoUrl: "https://gymvisual.com/img/p/1/7/5/5/2/17552.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
          exercise: "Incline Bench Press",
          videoUrl: "https://gymvisual.com/img/p/1/0/3/9/8/10398.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
          exercise: "Decline Bench Press",
          videoUrl: "https://gymvisual.com/img/p/6/5/2/3/6523.gif",
          sets: 3,
          reps: 10,
          rest: 60,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
      ],
    };

    setWorkout(data);
  };
  return (
    <>
      <div className="workout-page-container">
        <h3 className="main-heading">{workout && workout.type}Workout</h3>

        {workout &&
          workout.exercises.map((element: any, index: number) => (
            <div
              className={
                index % 2 === 0
                  ? "workout-details"
                  : "workout-details reverse-workout-details"
              }
              key={element.type + index}
            >
              <h1 className="main-heading workout-number">{index + 1}</h1>
              <img src={element.videoUrl} width={200} height={200} />
              <div className="workout-content">
                <h2>{element.exercise}</h2>
                <div>
                  <span>
                    {element.sets} sets X {element.reps} reps
                  </span>{" "}
                </div>
                <p>{element.description}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default page;
