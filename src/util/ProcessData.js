import generateRandomColors from "./RandomColors";

export function filterData(state) {
  let arr = [];

  arr = state.fetchedData.filter(
    (item) =>
      state.selectedCamp === item.camp && state.selectedCountry === item.country
  );

  state.schools = ["Show All"].concat([
    ...new Set(arr.map((item) => item.school)),
  ]);

  if (
    state.selectedSchool !== "Show All" &&
    state.schools.includes(state.selectedSchool)
  ) {
    arr = arr.filter((item) => item.school === state.selectedSchool);
  } else {
    state.selectedSchool = "Show All";
  }

  // state.filteredData = arr;
  //arr represents filteredData
  generateDataSets(state, arr);
}

export function getUniqueValues(state) {
  state.fetchedData.forEach((item) => {
    state.countries = [...new Set(state.countries.concat([item.country]))];
    state.camps = [...new Set(state.camps.concat([item.camp]))];
    state.schools = [...new Set(state.schools.concat([item.school]))];
  });

  state.selectedCountry = state.countries[0];
  state.selectedCamp = state.camps[0];
  state.selectedSchool = state.schools[0];
}

function generateDataSets(state, filteredData) {
  const schools = [...new Set(filteredData.map((item) => item.school))];
  const obj = {
    backgroundColor: "#121",
    borderColor: "#1216",
  }; //only used in testing mode to avoid random color generation
  const months = [
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
  ];

  const allSchoolsData = [];

  schools.forEach((school, index) => {
    const schoolData = [];
    let noOfLessons = 0;

    for (const month of months) {
      const found = filteredData.find(
        (element) => element.month === month && element.school === school
      );

      if (found) {
        noOfLessons += found.lessons;
        schoolData.push({
          id: found.id,
          lessons: found.lessons,
        });
      } else {
        schoolData.push({
          id: null,
          lessons: 0,
        });
      }
    }

    allSchoolsData.push({
      school,
      schoolData,
      noOfLessons,
    });
  });

  // console.log(allSchoolsData);

  const totalLessons = allSchoolsData.reduce((sum, current) => {
    sum += current.noOfLessons;
    return sum;
  }, 0);

  let datasets = allSchoolsData.map((element, i) => ({
    id: i,
    label: [
      `${element.noOfLessons} lessons`,
      `in ${element.school}`,
      `(${((element.noOfLessons * 100) / totalLessons).toFixed(2)}%)`,
    ],
    data: element.schoolData.map((item) => item.lessons),
    ...generateRandomColors(),
    // ...obj,
  }));

  state.chartData = {
    data: { labels: months, datasets },
    title: [`${totalLessons} Lessons`, `in ${state.selectedCamp}`],
    allSchoolsData,
  };
}
