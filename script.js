document.querySelector(".start-session-button").addEventListener("click", () => {
  // Hide session button and show video container
  document.querySelector(".start-session-button").style.display = "none";
  document.getElementById("jitsi-container").style.display = "block";

  const container = document.getElementById("jitsi-container");
  container.style.display = "block";

  // Jitsi config
  const domain = "meet.jit.si";
  const options = {
    roomName: "MentraSession_" + Math.floor(Math.random() * 100000), // generate unique room
    width: "100%",
    height: "100%",
    parentNode: container,
    interfaceConfigOverwrite: {
      SHOW_JITSI_WATERMARK: false
    }
  };
  const api = new JitsiMeetExternalAPI(domain, options);
});