import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, readAllUsers } from "../features/Action";
import CustomModal from "./Modal";
import { Link } from "react-router-dom";
import "./Style.css";

function Read() {
  const { users, loading, error, searchData } = useSelector(
    (state) => state.user
  ); // lay user slice

  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [genderRadio, setGenderRadio] = useState();
  const [isPopup, setPopup] = useState(false);

  useEffect(() => {
    dispatch(readAllUsers());
  }, []);

  const viewUser = (id) => {
    setId(id);
    setPopup(true);
  };


  console.log(searchData);
  return (
    <div>
      {isPopup && <CustomModal id={id} setPopup={setPopup} />}
  
      <h2>Show all list of HM: </h2>

      {users &&
        users
          .map((us) => (
            <div key={us.id} className="card ">
              <div className="card-body">
                <h5 className="card-title">{us.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{us.email}</h6>
                <p className="card-text">{us.gender}</p>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    viewUser(us.id);
                  }}>
                  View
                </button>{" "}
                &nbsp;
                <Link to={`/edit/${us.id}`} className="btn btn-success">
                  Edit
                </Link>{" "}
                &nbsp;
                <button
                  onClick={() => {
                    dispatch(deleteUser(us.id));
                  }}
                  className="btn btn-success">
                  Delete
                </button>
              </div>
            </div>
          ))}
    </div>
  );
}

export default Read;