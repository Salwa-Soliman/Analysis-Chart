import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

export default function CustomTable({ details }) {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <Table
      className={"w-50 mx-auto my-5 shadow-lg"}
      variant={isDarkMode ? "dark" : "primary"}
      striped
      bordered
      hover
    >
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(details).map((key) => (
          <tr key={key}>
            <td className={"key"}>{key.toUpperCase()}</td>
            <td className={"value"}>{details[key]}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
