import chartReducer, {
  setData,
  setSelectedCountry,
  setSelectedSchool,
  setSelectedCamp,
} from "./chartSlice";

/**
 * To make these test cases run successfully,
 * Go to '../util/ProcessData.js' =>
 * Comment Line 109 because it generates random border and bg colors for each run
 * UnComment line 110 to use fixed border and bg colores
 * When You're done with testing, you can omit changes
 */

const initialState = {
  fetchedData: [],
  chartData: [],
  countries: [],
  camps: [],
  schools: ["Show All"],
  selectedCountry: "",
  selectedCamp: "",
  selectedSchool: "Show All",
  elementDetails: [],
};

const fetchedData = [
  {
    id: "620af3a468e4b2e765e7c9e7",
    month: "Feb",
    camp: "Omaka",
    country: "Egypt",
    school: "Burke High School",
    lessons: 140,
  },
];

const chartData = {
  allSchoolsData: [
    {
      noOfLessons: 140,
      school: "Burke High School",
      schoolData: [
        { id: null, lessons: 0 },
        { id: "620af3a468e4b2e765e7c9e7", lessons: 140 },
        { id: null, lessons: 0 },
        { id: null, lessons: 0 },
        { id: null, lessons: 0 },
        { id: null, lessons: 0 },
        { id: null, lessons: 0 },
        { id: null, lessons: 0 },
        { id: null, lessons: 0 },
        { id: null, lessons: 0 },
        { id: null, lessons: 0 },
        { id: null, lessons: 0 },
      ],
    },
  ],
  data: {
    datasets: [
      {
        backgroundColor: "#121",
        borderColor: "#1216",
        data: [0, 140, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        id: 0,
        label: ["140 lessons", "in Burke High School", "(100.00%)"],
      },
    ],
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  title: ["140 Lessons", "in Omaka"],
};

const currentState = {
  fetchedData,
  chartData,
  countries: ["Egypt"],
  camps: ["Omaka"],
  schools: ["Show All", "Burke High School"],
  selectedCountry: "Egypt",
  selectedCamp: "Omaka",
  selectedSchool: "Show All",
  elementDetails: [],
};

test("should set data", () => {
  expect(chartReducer(initialState, setData({ data: fetchedData }))).toEqual(
    currentState
  );
});

test("should change selected school to Burke High School", () => {
  expect(
    chartReducer(currentState, setSelectedSchool("Burke High School"))
  ).toEqual({
    ...currentState,
    selectedSchool: "Burke High School",
  });
});

test("should change selected school to Show All", () => {
  expect(chartReducer(currentState, setSelectedSchool("Show All"))).toEqual({
    ...currentState,
    selectedSchool: "Show All",
  });
});

test("should change selected camp if array of camps.length>1", () => {
  expect(chartReducer(currentState, setSelectedCamp("Omaka"))).toEqual({
    ...currentState,
  });
});

test("should be the same => array of countries contains 1 value", () => {
  expect(chartReducer(currentState, setSelectedCountry("Egypt"))).toEqual({
    ...currentState,
  });
});
