import EncodingParametersInURLs from "./EncodingParamtersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
  const URL = "http://localhost:4000";
  return (
    <div>
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={`${URL}/a5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <EncodingParametersInURLs />
      <WorkingWithObjects />
      <WorkingWithArrays />
    </div>
  );
}
export default Assignment5;
