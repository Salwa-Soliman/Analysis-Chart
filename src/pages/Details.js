import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getElementDetails } from "../store/chartSlice";
import { Container } from "react-bootstrap";
import CustomTable from "../components/CustomTable";
export default function Details() {
  const { id } = useParams();
  const details = useSelector((state) => state.analysisChart.elementDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getElementDetails(id));
  }, [dispatch, id]);

  return (
    <Container className={"d-flex flex-column justify-content-center"}>
      <h1> Details</h1>
      <CustomTable details={details} />
      <Link
        to="/"
        className="m-auto text-decoration-none fs-4 fw-bold text-primary"
      >
        Go Back
      </Link>
    </Container>
  );
}
