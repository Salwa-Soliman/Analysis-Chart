/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../store/chartSlice";
import Loading from "./../components/Loading";
import AnalysisChart from "../components/AnalysisChart";
import DropDowns from "../components/DropDowns";
import { Container } from "react-bootstrap";
import CustomModal from "./../components/CustomModal";
export default function HomePage({ navigation }) {
  const data = useSelector((state) => state.analysisChart.fetchedData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.length) {
      axios
        .get(
          "https://raw.githubusercontent.com/mosafwat/analysis-fe-challenge/master/data.json"
        )
        .then((response) => {
          setTimeout(() => {
            // setFetchedData(response.data);
            dispatch(setData({ data: response.data }));
          }, 1000);
        })
        .catch((err) => alert(err));
    }
  }, []);

  if (!data.length) {
    return <Loading />;
  }

  return (
    <Container className={"col-10"}>
      <h1>Analysis Chart</h1>
      <DropDowns />
      <AnalysisChart />
    </Container>
  );
}
