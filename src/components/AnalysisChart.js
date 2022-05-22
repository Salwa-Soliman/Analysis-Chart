import React, { useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, getElementAtEvent } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomModal from "./CustomModal";
import { useWindowSize } from "./../util/useWindowSize";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function AnalysisChart() {
  const navigate = useNavigate();
  const chartRef = useRef();
  const chartData = useSelector((state) => state.analysisChart.chartData);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const [isModalOpened, setisModalOpened] = useState(false);
  const { width } = useWindowSize();
  let labelFontSize;

  if (width < 500) {
    labelFontSize = 6;
  } else if (width >= 500 && width < 776) {
    labelFontSize = 7;
  } else if (width >= 776 && width < 991) {
    labelFontSize = 9;
  } else if (width >= 991 && width < 1024) {
    labelFontSize = 10;
  } else if (width >= 1024) {
    labelFontSize = 11;
  }

  labelFontSize ||= 10;
  console.log(labelFontSize);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: isDarkMode ? "#333" : "#777",
          font: {
            size: labelFontSize,
          },
          padding: width < 1024 ? 30 : 50,
          boxWidth: 10,
          boxHeight: 10,
        },
      },

      title: {
        // position: "right",
        display: true,
        text: chartData.title,
        color: isDarkMode ? "#835bad" : "#2fa1d9",
        font: {
          size: labelFontSize + 8,
        },
      },
    },
  };

  const onClickHandler = (event) => {
    try {
      const { datasetIndex, index } = getElementAtEvent(
        chartRef.current,
        event
      )[0];
      const id = chartData.allSchoolsData[datasetIndex].schoolData[index].id;
      id ? navigate(`/details/${id}`) : setisModalOpened(true);
    } catch (err) {
      // console.log("Unpressable area .. You're not redirected anywhere");
    }
  };

  return (
    <div className="bg-white bg-opacity-75 rounded shadow-lg">
      <Line
        ref={chartRef}
        onClick={(event) => onClickHandler(event)}
        options={options}
        data={chartData.data}
        datasetIdKey="id"
      />
      <CustomModal isOpened={isModalOpened} setIsOpened={setisModalOpened} />
    </div>
  );
}
