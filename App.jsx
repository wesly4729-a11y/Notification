import Notification from "./Notification";

function App() {
  return (
    <div>
      <h1>Notification Component</h1>

      <Notification
        type="info"
        message="Your Jio recharge is expiring soon. Please recharge to continue enjoying your services."
      />

      <Notification
        type="warning"
        message="Murasu Toofan is arriving in Andhra Pradesh within 24 hours. Stay alert and follow AP news updates."
      />

    </div>
  );
}

export default App;