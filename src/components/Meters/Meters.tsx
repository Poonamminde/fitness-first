import React from "react";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/joy";
import { AiOutlineEye } from "react-icons/ai";
import "./Meters.css";

const Banner = () => {
  const [data, setData] = useState<any | null>(null);
  useEffect(() => {
    let arr = [
      {
        name: "Calories",
        value: 2000,
        unit: "kcal",
        goal: 2500,
        goalUnit: "kcal",
      },
      {
        name: "Sleep",
        value: 7,
        unit: "hr",
        goal: 8,
        goalUnit: "hr",
      },
      {
        name: "Steps",
        value: 150,
        unit: "step",
        goal: 1000,
        goalUnit: "step",
      },
      {
        name: "Water",
        value: 2000,
        unit: "ml",
        goal: 3000,
        goalUnit: "ml",
      },
      {
        name: "Weight",
        value: 47,
        unit: "kcal",
        goal: 57,
        goalUnit: "kcal",
      },
      {
        name: "Workout",
        value: 4,
        unit: "day",
        goal: 6,
        goalUnit: "day",
      },
    ];
    setData(arr);
  }, []);

  function simplifyFraction(
    numerator: number,
    denominator: number
  ): [number, number] {
    function gcd(a: number, b: number): number {
      return b === 0 ? a : gcd(b, a % b);
    }
    const commonDivisor: number = gcd(numerator, denominator);

    // Simplify the fraction
    const simplifiedNumerator: number = numerator / commonDivisor;
    const simplifiedDenominator: number = denominator / commonDivisor;

    return [simplifiedNumerator, simplifiedDenominator];
  }

  return (
    <div className="meter">
      {data &&
        data.map((element: any, index: number) => {
          return (
            <div className="meter-items" key={index}>
              <div className="banner-subheading">
                <div className="banner-box">
                  <div>
                    <h3>{element.name}</h3>
                  </div>
                  <div>
                    <p>
                      {element.value}
                      {element.unit}
                    </p>
                  </div>
                </div>
                <div className="banner-box">
                  <div>
                    <h3>Target</h3>
                  </div>
                  <div>
                    {element.goal}
                    {element.goalUnit}
                  </div>
                </div>
              </div>
              <CircularProgress
                color="neutral"
                determinate
                size="lg"
                value={(element.value / element.goal) * 100}
                variant="solid"
              >
                <span className="textincircle">
                  {simplifyFraction(element.value, element.goal)[0] +
                    " / " +
                    simplifyFraction(element.value, element.goal)[1]}
                </span>
              </CircularProgress>
              <br />
              <button
                className="show-result-button"
                onClick={() => {
                  window.location.href = `/report/${element.name}`;
                }}
              >
                Show Result <AiOutlineEye />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Banner;
