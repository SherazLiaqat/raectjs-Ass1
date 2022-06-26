import React, { useState, useEffect } from "react";
// import { format } from "date-fns";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
const Table = () => {
  const [getdata, setGetData] = useState([{}]);
  useEffect(() => {
    getFormData();
  }, []);
  const getFormData = async () => {
    await axios
      .get("http://localhost:5000/posts")
      .then((res) => setGetData(res.data));
  };
  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:5000/posts/" + id)
      .then((res) => alert("successfuly deletete item"));
    getFormData();
  };
  const handleUpdate = async () => {
    await axios
      .put(`http://localhost:5000/posts/${getdata.id}`, getdata)
      .then((res) => alert("successfuly Update item"));
    getFormData();
  };
  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Recruitement Name</th>
            <th scope="col">Candidate No.</th>
            <th scope="col">Start Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {getdata &&
            getdata.map((user) => (
              <tr>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.number}</td>
                <td>{user.date}</td>

                <td>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    style={{ border: "none" }}
                    // onClick={() => handleUpdate()}
                  >
                    <BiEdit />
                  </button>
                  <button
                    style={{ border: "none", color: "red" }}
                    onClick={() => handleDelete(user.id)}
                  >
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          Launch static backdrop modal
        </button>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
