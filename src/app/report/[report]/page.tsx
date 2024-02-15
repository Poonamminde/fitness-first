"use client";
import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { AiFillEdit } from "react-icons/ai";
import CalorieIntakePopup from "@/components/ReportPopup/CalarieIntakePopup/page";
import Navbar from "@/components/Navbar/Navbar";
import "./report.css";

const Index = () => {
  const [dataSet1, setDataSet1] = React.useState<any | null>(null);
  const [showCalorieIntakePopup, setShowCalorieIntakePopup] =
    React.useState(false);
  const getDataForS1 = async () => {
    let temp = [
      {
        date: "Thu Feb 15 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2000,
        unit: "kcal",
      },
      {
        date: "Wed Feb 14 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2500,
        unit: "kcal",
      },
      {
        date: "Tue Feb 13 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2700,
        unit: "kcal",
      },
      {
        date: "Mon Feb 12 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 3000,
        unit: "kcal",
      },
      {
        date: "Sun Feb 11 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2000,
        unit: "kcal",
      },
      {
        date: "Sat Feb 10 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2300,
        unit: "kcal",
      },
      {
        date: "Fri Feb 09 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2500,
        unit: "kcal",
      },
      {
        date: "Thu Feb 08 2023 20:30:30 GMT+0530 (India Standard Time)",
        value: 2700,
        unit: "kcal",
      },
    ];
    const dataForLineChart = temp.map((item) => {
      const ans = "" + item.value;
      return ans;
    });
    const dataForXAxis = temp.map((item) => {
      const ans = new Date(item.date).getDate();
      return ans;
    });
    console.log({
      data: dataForLineChart,
      title: "1 day calarie intake",
      color: "green",
      xAxis: {
        data: dataForXAxis,
        label: "Last 10 days",
        scaleType: "time",
      },
    });
    setDataSet1({
      data: dataForLineChart,
      title: "1 day calarie intake",
      color: "green",
      xAxis: {
        data: dataForXAxis,
        label: "Last 10 days",
        scaleType: "time",
      },
    });
  };
  React.useEffect(() => {
    getDataForS1();
  }, []);
  return (
    <>
      <Navbar />
      <div className="report-container">
        <div>
          {dataSet1 != null && (
            <LineChart
              xAxis={[
                {
                  data: dataSet1.xAxis.data,
                  scaleType: dataSet1.xAxis.scaleType,
                  label: dataSet1.xAxis.label,
                },
              ]}
              series={[
                {
                  data: dataSet1.data,
                  label: dataSet1.title,
                  color: dataSet1.color,
                },
              ]}
              width={550}
              height={300}
            />
          )}
        </div>
        <div>
          {dataSet1 != null && (
            <LineChart
              xAxis={[
                {
                  data: dataSet1.xAxis.data,
                  scaleType: dataSet1.xAxis.scaleType,
                  label: dataSet1.xAxis.label,
                },
              ]}
              series={[
                {
                  data: dataSet1.data,
                  label: dataSet1.title,
                  color: dataSet1.color,
                },
              ]}
              width={550}
              height={300}
            />
          )}
        </div>
        <div>
          {dataSet1 != null && (
            <LineChart
              xAxis={[
                {
                  data: dataSet1.xAxis.data,
                  scaleType: dataSet1.xAxis.scaleType,
                  label: dataSet1.xAxis.label,
                },
              ]}
              series={[
                {
                  data: dataSet1.data,
                  label: dataSet1.title,
                  color: dataSet1.color,
                },
              ]}
              width={550}
              height={300}
            />
          )}
        </div>
        <div>
          {dataSet1 != null && (
            <LineChart
              xAxis={[
                {
                  data: dataSet1.xAxis.data,
                  scaleType: dataSet1.xAxis.scaleType,
                  label: dataSet1.xAxis.label,
                },
              ]}
              series={[
                {
                  data: dataSet1.data,
                  label: dataSet1.title,
                  color: dataSet1.color,
                },
              ]}
              width={550}
              height={300}
            />
          )}
        </div>
        {showCalorieIntakePopup && (
          <CalorieIntakePopup
            setShowCalorieIntakePopup={setShowCalorieIntakePopup}
          />
        )}
      </div>
      <button
        className="editbutton"
        onClick={() => {
          setShowCalorieIntakePopup(true);
        }}
      >
        <AiFillEdit style={{ fontSize: "25px" }} />
      </button>
    </>
  );
};

export default Index;
