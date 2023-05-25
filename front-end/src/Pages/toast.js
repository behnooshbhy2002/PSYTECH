import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast(props) {
  const notify = () =>
    toast(
      `${props.userFull} با موفقیت ${
        props.messageType == "reject" ? " حذف شد" : " اضافه شد"
      }`,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );

  if (props.buttonclicked) {
    notify();
    props.setButtonclicked(true);
  }
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      >
        HIIIIIIIIIIIIIIIII
      </ToastContainer>
    </div>
  );
}
export default Toast;
