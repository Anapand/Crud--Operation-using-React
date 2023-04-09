import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  function getData() {
    axios
      .get("https://6431c46cd4518cfb0e68c9bf.mockapi.io/crud-youtube")
      .then((res) => {
        setData(res.data);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  function handleDelete(id) {
    axios
      .delete(`https://6431c46cd4518cfb0e68c9bf.mockapi.io/crud-youtube/${id}`)
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage = (id, name, email) => {
    localStorage.set("id", id);
    localStorage.set("name", name);
    localStorage.set("email", email);
  };

  return (
    <>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Check this switch"
        onClick={() => {
          if (tabledark === "table-dark") setTableDark("");
          else setTableDark("table-dark");
        }}
      />
      <div className="d-flex justify-content-between m-2">
        <h1>Read Operation</h1>
        <Link to="/">
          <Button variant="secondary">Create</Button>
        </Link>
      </div>
      <Table striped bordered hover className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{eachData.id}</td>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link
                      to="/update"
                      onClick={() =>
                        setToLocalStorage(
                          eachData.id,
                          eachData.name,
                          eachData.email
                        )
                      }
                    >
                      <Button variant="primary">Edit</Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </Table>
    </>
  );
};

export default Read;
