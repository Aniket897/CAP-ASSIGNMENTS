const Error = ({ reset }) => {
  return (
    <div className="error">
      <h3>Somthing Went Wrong</h3>
      <button onClick={reset}>try again</button>
    </div>
  );
};

export default Error;
