import React, { useState } from "react";
import "../style/AudioRecorderr.css";
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
              <p>
                    {status === "recording"
                      ? "در حال ضبط صدای شما"
                      : " برای ضبط صدای خود روی شروع کلیک کنید"}
                  </p>
              {status === "recording" ? (
                <>
                  
                  <button onClick={stopRecording}> توقف</button>
                </>
              ) : (
                <>
                  <button onClick={startRecording}>شروع</button>
                </>
              )}
              <audio
                className="audio-tag"
                src={mediaBlobUrl}
                controls
                autoPlay
              ></audio>
            </div>
          );
        }}
      ></ReactMediaRecorder>
    </div>
  );
}

export default AudioRecorderr;
