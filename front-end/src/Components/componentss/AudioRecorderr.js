import React, { useState } from "react";
import "../style/AudioRecorderr.css";
import { BsFillMicFill } from 'react-icons/bs';
import {BsFillMicMuteFill} from 'react-icons/bs'
import {
  useReactMediaRecorder,
  ReactMediaRecorder,
} from "react-media-recorder";
function AudioRecorderr() {
  //   const { recordstatus, startRecording, stopRecording, mediaBlobUrl } =
  //     useReactMediaRecorder({ audio: true });
  return (
    <div>
      <ReactMediaRecorder
        audio
        blobPropertyBag={{ type: "audio/mp3" }}
        render={({
          previewStream,
          status,
          startRecording,
          stopRecording,
          mediaBlobUrl,
        }) => {
          return (
            <div className="audio-record-main-div">
              <p className="p-rec" style={{color:"blueviolet"}}>
                    {status === "recording"
                      ? "در حال ضبط صدای شما"
                      : " برای ضبط صدای خود روی میکروفون کلیک کنید"}
              </p>
              <div className="div-rec">
              {status === "recording" ? (
                  <>  
                    <br></br>
                   <BsFillMicMuteFill size={20} className="mic-icon" onClick={stopRecording}>sdvsd</BsFillMicMuteFill>
                </>
              ) : (
                    <>
                      <br></br>
                    <BsFillMicFill size={20} className="mic-icon" onClick={startRecording} >rth</BsFillMicFill>
                </>
              )}
              <audio
                className="audio-tag"
                src={mediaBlobUrl}
                controls
                autoPlay
              ></audio>
              </div>
              </div>
          );
        }}
      ></ReactMediaRecorder>
    </div>
  );
}

export default AudioRecorderr;
