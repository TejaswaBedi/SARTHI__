import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchNoticeByIdAsync, selectNotice } from "../noticeSlice";
import { PictureAsPdf } from "@mui/icons-material";

const NoticeDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const notice = useSelector(selectNotice);
  useEffect(() => {
    dispatch(fetchNoticeByIdAsync(params.id));
  }, [dispatch, params.id]);
  return (
    <>
      {notice && (
        <div>
          <div
            className="header_wrapper"
            style={{
              width: "90vw",
              margin: "2vh 8vh",
              padding: "2vh",
              background: "lightblue",
              border: "red 2px",
              //borderRadius: "30px",
            }}
          >
            <div style={{ color: "white", fontSize: "24px" }}>
              <strong> {notice.noticeMsg}</strong>
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
              {notice.description}
            </div>
          </div>
          {notice.attachments ? (
            <div
              className="header_wrapper"
              style={{
                width: "90vw",
                margin: "2vh 8vh",
                padding: "2vh",
                background: "lightblue",
                border: "red 2px",
                //borderRadius: "30px",
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
                  padding: "2vh 2vh",
                  marginTop: "1vh",
                  marginLeft: "2vh",
                  borderRadius: "20px",
                }}
              >
                {notice.attachments.map((attachment) => (
                  <>
                    {Object.entries(attachment)[0][1] && (
                      <span>
                        <PictureAsPdf />
                        {Object.entries(attachment)[0][1]}
                      </span>
                    )}
                  </>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default NoticeDetail;
