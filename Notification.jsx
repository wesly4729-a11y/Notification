function Notification(props) {
  return (
    <div style={{
      backgroundColor: props.type === "info" ? "blue" : "orange",
      color: "white",
      padding: "15px",
      margin: "10px",
      width: "300px",
      borderRadius: "5px"
    }}>
      <h3>{props.type}</h3>
      <p>{props.message}</p>
    </div>
  );
}

export default Notification;