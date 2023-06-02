import React, { useState } from "react";
import "../style/AudioRecorderr.css";
import { BsFillMicFill } from "react-icons/bs";
import { BsFillMicMuteFill } from "react-icons/bs";
import {
  useReactMediaRecorder,
  ReactMediaRecorder,
} from "react-media-recorder";
import { useEffect } from "react";
function AudioRecorderr(props) {
  //   const { recordstatus, startRecording, stopRecording, mediaBlobUrl } =
  //     useReactMediaRecorder({ audio: true });
  const [audio, setAudio] = useState();
  const handleSave = async () => {
    const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
    const audioFile = new File([audioBlob], "voice.wav", { type: "audio/wav" });
    const formData = new FormData(); // preparing to send to the server

    formData.append("file", audioFile); // preparing to send to the server

    props.onDataReceived(formData);
    //onSaveAudio(formData); // sending to the server
  };
  const { mediaBlobUrl } = useReactMediaRecorder({
    audio: true,
  });
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
          setAudio(mediaBlobUrl);
          return (
            <div className="audio-record-main-div">
              <p className="p-rec" style={{ color: "blueviolet" }}>
                {status === "recording"
                  ? "در حال ضبط صدای شما"
                  : " برای ضبط صدای خود روی میکروفون کلیک کنید"}
              </p>
              <div className="div-rec">
                {status === "recording" ? (
                  <>
                    <br></br>
                    <BsFillMicMuteFill
                      size={20}
                      className="mic-icon"
                      onClick={() => {
                        stopRecording();
                        handleSave(mediaBlobUrl);
                      }}
                    >
                      sdvsd
                    </BsFillMicMuteFill>
                  </>
                ) : (
                  <>
                    <br></br>
                    <BsFillMicFill
                      size={20}
                      className="mic-icon"
                      onClick={startRecording}
                    >
                      rth
                    </BsFillMicFill>
                  </>
                )}
                <audio
                  className="audio-tag"
                  src={mediaBlobUrl}
                  controls
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
