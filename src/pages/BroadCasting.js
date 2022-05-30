import { useRef, useState, memo } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { MDBBtn, MDBRow, MDBCol } from "mdb-react-ui-kit";
import InstructorLayout from "../components/InstructorLayout";
import Loading from "../components/Loading";

const Broadcasting = () => {

  const apiRef = useRef();
  const [logItems, updateLog] = useState([]);
  const [showNew, toggleShowNew] = useState(false);
  const [knockingParticipants, updateKnockingParticipants] = useState([]);

  const printEventOutput = (payload) => {
    updateLog((items) => [...items, JSON.stringify(payload)]);
  };

  const handleAudioStatusChange = (payload, feature) => {
    if (payload.muted) {
      updateLog((items) => [...items, `${feature} off`]);
    } else {
      updateLog((items) => [...items, `${feature} on`]);
    }
  };

  const handleChatUpdates = (payload) => {
    if (payload.isOpen || !payload.unreadCount) {
      return;
    }
    apiRef.current.executeCommand("toggleChat");
    updateLog((items) => [
      ...items,
      `you have ${payload.unreadCount} unread messages`,
    ]);
  };

  const handleKnockingParticipant = (payload) => {
    updateLog((items) => [...items, JSON.stringify(payload)]);
    updateKnockingParticipants((participants) => [
      ...participants,
      payload?.participant,
    ]);
  };

  const resolveKnockingParticipants = (condition) => {
    knockingParticipants.forEach((participant) => {
      apiRef.current.executeCommand(
        "answerKnockingParticipant",
        participant?.id,
        condition(participant),
      );
      updateKnockingParticipants((participants) =>
        participants.filter((item) => item.id === participant.id),
      );
    });
  };

  const handleJitsiIFrameRef1 = (iframeRef) => {
    iframeRef.style.border = "10px solid #3d3d3d";
    iframeRef.style.background = "#3d3d3d";
    iframeRef.style.height = "500px";
  };

  const handleJitsiIFrameRef2 = (iframeRef) => {
    iframeRef.style.marginTop = "10px";
    iframeRef.style.border = "10px dashed #df486f";
    iframeRef.style.padding = "5px";
    iframeRef.style.height = "500px";
  };

  const handleApiReady = (apiObj) => {
    apiRef.current = apiObj;
    apiRef.current.on("knockingParticipant", handleKnockingParticipant);
    apiRef.current.on("audioMuteStatusChanged", (payload) =>
      handleAudioStatusChange(payload, "audio"),
    );
    apiRef.current.on("videoMuteStatusChanged", (payload) =>
      handleAudioStatusChange(payload, "video"),
    );
    apiRef.current.on("raiseHandUpdated", printEventOutput);
    apiRef.current.on("titleViewChanged", printEventOutput);
    apiRef.current.on("chatUpdated", handleChatUpdates);
    apiRef.current.on("knockingParticipant", handleKnockingParticipant);
  };

  const handleReadyToClose = () => alert("Ready to close...");

  const generateRoomName = () =>
    `Askoacademy${Math.random() * 100}-${Date.now()}`;

  // Multiple instances demo
  const renderNewInstance = () => {
    if (!showNew) {
      return null;
    }

    return (
      <JitsiMeeting
        roomName={generateRoomName()}
        getIFrameRef={handleJitsiIFrameRef2}
      />
    );
  };

  const renderButtons = () => (
    <div className="d-flex justify-content-around m-3">
      <MDBBtn
        color="warning"
        size="lg"
        onClick={() => apiRef.current.executeCommand("toggleRaiseHand")}
      >
        Raise hand
      </MDBBtn>

      <MDBBtn
        size="lg"
        color="primary"
        onClick={() =>
          resolveKnockingParticipants(({ name }) => !name.includes("test"))
        }
      >
        Resolve lobby
      </MDBBtn>

      <MDBBtn
        color="danger"
        size="lg"
        onClick={() => apiRef.current.executeCommand("subject", "New Subject")}
      >
        Change subject
      </MDBBtn>

      <MDBBtn
        color="success"
        size="lg"
        onClick={() => apiRef.current.executeCommand("subject", "New Subject")}
      >
        Toggle new instance
      </MDBBtn>
    </div>
  );

  const renderLog = () =>
    logItems.map((item, index) => (
      <div
        style={{
          fontFamily: "monospace",
          padding: "5px",
        }}
        key={index}
      >
        {item}
      </div>
    ));

  const renderSpinner = () => <Loading />;

  return (
    <InstructorLayout title="Diffusion">
      <h3 className="pt-5">Creer une Diffusion</h3>
      <div className="mt-5">
        <MDBRow>
          <MDBCol>
            <JitsiMeeting
              roomName={generateRoomName()}
              spinner={renderSpinner}
              config={{
                subject: "",
                hideConferenceSubject: false,
                enableClosePage: true,
              }}
              onApiReady={(externalApi) => handleApiReady(externalApi)}
              onReadyToClose={handleReadyToClose}
              getIFrameRef={handleJitsiIFrameRef1}
            />
            {/* {renderButtons()} */}
            {/* {renderNewInstance()} */}
            {/* {renderLog()} */}
          </MDBCol>
        </MDBRow>
      </div>
    </InstructorLayout>
  );
};

export default memo(Broadcasting);
