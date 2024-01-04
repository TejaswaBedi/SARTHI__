import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchCompaniesByCompIdAsync,
  selectUserApplied,
} from "../features/applied/appliedSlice";

const UserDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const userApllied = useSelector(selectUserApplied);
  useEffect(() => {
    dispatch(fetchCompaniesByCompIdAsync(params.id));
  }, [dispatch, params.id]);
  console.log(userApllied);
  return (
    <div>
      <div
        className="upcoming_companies_left_content"
        style={{
          width: "90vw",
          padding: "1vh 2vh",
          margin: "4vh",
          // background: "lightblue",
          // borderRadius: "30px",
        }}
      >
        <div
          className="subCard"
          style={{
            height: "10%",
            width: "85vw",
            background: "white",
            // borderRadius: "10px",
            margin: "1.5vh 3vh",
            padding: "1vh 1vh",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            className="title"
            style={{
              background: "transparent",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "gray",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <p style={{}} htmlFor="name">
                Student Name
              </p>
              <p htmlFor="name">Student RollNumber</p>
              <p
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Student Email-id
              </p>
            </div>
          </div>
        </div>
        {userApllied &&
          userApllied.map((UserDetail) => {
            return (
              <div
                className="subCard"
                style={{
                  height: "10%",
                  width: "85vw",
                  background: "white",
                  // borderRadius: "10px",
                  margin: "1.5vh 3vh",
                  padding: "1vh 1vh",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  className="title"
                  style={{
                    background: "transparent",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "gray",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    {UserDetail["user"]["profile"][0] ? (
                      <p style={{}} htmlFor="name">
                        {UserDetail["user"]["profile"][0] &&
                          UserDetail["user"]["profile"][0]["name"]}
                      </p>
                    ) : null}
                    {UserDetail["user"]["profile"][0] ? (
                      <p htmlFor="name">
                        {UserDetail["user"]["profile"][0]["roll"]}
                      </p>
                    ) : null}
                    {UserDetail["user"]["profile"][0] ? (
                      <p
                        htmlFor="name"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        {UserDetail["user"]["profile"][0] &&
                          UserDetail["user"]["profile"][0]["email"]}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserDetail;
