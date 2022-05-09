import { memo, useCallback } from "react";
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";
import InstructorLayout from "../components/InstructorLayout";

const Instructors = () => {
  const client = ZoomMtgEmbedded.createClient();

  // setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
  var signatureEndpoint = '';
  // This Sample App has been updated to use SDK App type credentials https://marketplace.zoom.us/docs/guides/build/sdk-app
  const sdkKey = "";
  var meetingNumber = "";
  var userName = "";
  var userEmail = "";
  var passWord = "";
  // pass in the registrant's token if your meeting or webinar requires registration. More info here:
  // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/component-view/meetings#join-registered
  // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/component-view/webinars#join-registered
  var registrantToken = "";

    const startMeeting = useCallback((signature) => {
      let meetingSDKElement = document.getElementById("meetingSDKElement");

      client.init({
        debug: true,
        zoomAppRoot: meetingSDKElement,
        language: "fr-FR",
        customize: {
          meetingInfo: [
            "topic",
            "host",
            "mn",
            "pwd",
            "telPwd",
            "invite",
            "participant",
            "dc",
            "enctype",
          ],
          toolbar: {
            buttons: [
              {
                text: "Custom Button",
                className: "CustomButton",
                onClick: () => {
                  console.log("custom button");
                },
              },
            ],
          },
          video: {
            isResizable: true,
            viewSizes: {
              default: {
                width: 1024,
                height: 600,
              },
              ribbon: {
                width: 300,
                height: 700,
              },
            },
          },
        },
      });

      client.join({
        sdkKey,
        signature: signature,
        meetingNumber: meetingNumber,
        password: passWord,
        userName: userName,
        userEmail: userEmail,
        tk: registrantToken,
      });
    }, [client, meetingNumber, passWord, registrantToken, sdkKey, userEmail, userName]);

    const getSignature = useCallback(async (e) => {
      e.preventDefault();
      try {
        const params = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            meetingNumber: meetingNumber,
            role: 1,
          }),
        };
        const res = await fetch(signatureEndpoint, params);
        if (res?.status === 200) {
          const response = await res.json();
          startMeeting(response?.signature);
        }
      } catch (error) {
        console.error('error: ', error);
      }
    }, [meetingNumber, signatureEndpoint, startMeeting])

  return (
    <InstructorLayout>
      <main>
        <h1>Demarrer une diffusion</h1>
        {/* For Component View */}
        <div id="meetingSDKElement">
          {/* Zoom Meeting SDK Component View Rendered Here */}
        </div>
        <button onClick={getSignature}>Demarrer une diffusion</button>
      </main>
    </InstructorLayout>
  );
};

export default memo(Instructors);
