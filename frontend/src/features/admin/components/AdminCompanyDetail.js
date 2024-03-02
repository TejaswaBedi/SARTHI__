import React, { useEffect, useState } from "react";
import BusinessIcon from "@mui/icons-material/Business";
import TitleIcon from "@mui/icons-material/Title";
import PaymentIcon from "@mui/icons-material/Payment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./Company.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCompanyByIdAsync,
  selectedCompanyById,
} from "../../companies/companySlice";
import { useParams } from "react-router";
import { Button } from "@mui/material";
import { addToApplyAsync } from "../../applied/appliedSlice";
import { selectLoggedInUser } from "../../auth/authSlice";

export function AdminCompanyDetail() {
  const dispatch = useDispatch();
  const company = useSelector(selectedCompanyById);
  const user = useSelector(selectLoggedInUser);
  const params = useParams();
  if (company) {
    var data = [
      {
        id: 1,
        title: `CGPA`,
        info: company.cgpa,
      },
      {
        id: 2,
        title: `10TH MARK'S PERCENTAGE`,
        info: company.ten,
      },
      {
        id: 3,
        title: `12TH MARK'S PERCENTAGE`,
        info: company.twelve,
      },
      {
        id: 4,
        title: `BACKLOGS`,
        info: company.backlogs,
      },
    ];
  }
  const handleApply = (e) => {
    e.preventDefault();
    const newItem = { ...company, user: user.id };
    delete newItem["id"];
    dispatch(addToApplyAsync(newItem));
  };
  useEffect(() => {
    dispatch(fetchCompanyByIdAsync(params.id));
  }, [dispatch, params.id]);
  const showFile = (attachedFile) => {
    console.log(attachedFile);
    window.open(
      `http://localhost:8080/files/${attachedFile}`,
      "_blank",
      "noreferrer"
    );
  };
  return (
    <>
      {company && (
        <div className="main-wrapper">
          <div className="navBarSpace"></div>
          <div className="main_page_wrapper">
            {/* <PageHeader heading="COMPANY DETAILS" type="company_page" /> */}
            <div
              className="header_wrapper"
              style={{
                width: "90vw",
                height: "30vh",
                margin: "2vh 4vh",
                border: "red 2px",
                borderRadius: "30px",

                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* company ka data yaha aaega */}
              <div className="companyName infoField">
                <div className="icon-wrapper">
                  <BusinessIcon
                    className="icon"
                    style={{ fontSize: "3.5rem" }}
                  />
                </div>
                <div className="tagTitle">COMPANY NAME</div>
                <div
                  style={{
                    backgroundColor: "white",
                    height: "1%",
                    width: "90%",
                  }}
                ></div>
                <div className="tagName">{company.name}</div>
              </div>
              <div className="companyType infoField">
                <div className="icon-wrapper">
                  <TitleIcon className="icon" style={{ fontSize: "3.5rem" }} />
                </div>
                <div className="tagTitle">COMPANY TYPE</div>
                <div
                  style={{
                    backgroundColor: "white",
                    height: "1%",
                    width: "90%",
                  }}
                ></div>
                <div className="tagName">{company.field}</div>
              </div>
              <div className="companyCTC infoField">
                <div className="icon-wrapper">
                  <PaymentIcon
                    className="icon"
                    style={{ fontSize: "3.5rem" }}
                  />
                </div>
                <div className="tagTitle">COMPANY CTC</div>
                <div
                  style={{
                    backgroundColor: "white",
                    height: "1%",
                    width: "90%",
                  }}
                ></div>
                <div className="tagName">{company.ctc}</div>
              </div>
              <div className="companyDate infoField">
                <div className="icon-wrapper">
                  <CalendarMonthIcon
                    className="icon"
                    style={{ fontSize: "3.5rem" }}
                  />
                </div>
                <div className="tagTitle">DATE OF ARRIVAL</div>
                <div
                  style={{
                    backgroundColor: "white",
                    height: "1%",
                    width: "90%",
                  }}
                ></div>
                <div className="tagName">{company.scheduled}</div>
              </div>
            </div>
            <div
              className="header_wrapper"
              style={{
                width: "90vw",
                margin: "1vh 4vh",
                padding: "2vh",
                background: "#242526",
                border: "red 2px",
                borderRadius: "30px",
              }}
            >
              <div className="header-main" style={{ marginLeft: "-4vh" }}>
                DESCRIPTION
              </div>
              <div
                style={{
                  height: "20%",
                  width: "98%",
                  background: "white",
                  padding: "4vh",
                  marginTop: "1vh",
                  marginLeft: "2vh",
                  borderRadius: "20px",
                }}
              >
                {company.description}
              </div>
            </div>
            <div
              className="header_wrapper"
              style={{
                width: "90vw",
                margin: "1vh 4vh",
                padding: "2vh",
                background: "#242526",
                border: "red 2px",
                borderRadius: "30px",
              }}
            >
              <div className="header-main" style={{ marginLeft: "-4vh" }}>
                ATTACHMENTS
              </div>
              <div
                style={{
                  height: "20%",
                  width: "98%",
                  background: "white",
                  padding: "0 2vh",
                  marginTop: "1vh",
                  marginLeft: "2vh",
                  // borderRadius: "20px",
                }}
              >
                {company.attachment1 ? (
                  <>
                    <button onClick={() => showFile(company.attachment1)}>
                      {company.attachment1}
                    </button>
                  </>
                ) : (
                  "JDs and Forms"
                )}
              </div>
            </div>
            <div
              className="header_wrapper"
              style={{
                width: "90vw",
                height: "40vh",
                margin: "2vh 4vh",
                padding: "2vh",
                background: "#242526",
                border: "red 2px",
                borderRadius: "30px",
              }}
            >
              <div className="header-wrapper">
                <div className="header-main">ELIGIBILITY CRITERIA</div>
              </div>
              <div className="list-wrapper">
                {data.map((currElem) => {
                  return (
                    <div
                      style={{
                        height: "20%",
                        width: "98%",
                        background: "white",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        padding: "0 2vh",
                        marginTop: "1vh",
                        borderRadius: "20px",
                      }}
                    >
                      <div
                        className="title-wrapper"
                        style={{
                          width: "50%",
                          height: "100%",
                          background: "yellow",
                          display: "flex",
                          alignItems: "center",
                          background: "transparent",
                          fontSize: "1.4rem",
                          color: "gray",
                          fontWeight: "bold",
                        }}
                      >
                        {currElem.title} :
                      </div>
                      <div
                        className="info-wrapper"
                        style={{
                          width: "50%",
                          height: "100%",
                          background: "green",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "flex-end",
                          background: "transparent",
                          fontSize: "1.4rem",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {currElem.info}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {user.role === "user" && (
              <div className="header-wrapper">
                <Button onClick={handleApply} fullWidth>
                  <div
                    style={{
                      color: "white",
                      fontSize: "20px",
                      marginRight: "10px",
                    }}
                  >
                    {" "}
                    Once filled the company form please click here {" -> "}
                  </div>
                  <div className="applied_button">APPLIED</div>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
