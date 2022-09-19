import './style.css';

const IsTriangle = () => {
  return (
    <>
      <div className="main-card-container">
        <div className="left-card">
          <div className="brand">
            <p className="title">Is Triangle?</p>
            <p className="description">
              Check whether all 3 angles make up to the triangle or not.
            </p>
          </div>
          <div className="hint">
            Hint*: Sum of all angles of a triangle is 180 degrees.
          </div>
        </div>
        <div className="right-card">
          <div className="container">
            <div className="input-container">
              <label htmlFor="angle1">angle1 (in degrees)</label>
              <input type="number" />
              <label htmlFor="angle1">angle2 (in degrees)</label>
              <input type="number" />
              <label htmlFor="angle1">angle3 (in degrees)</label>
              <input type="number" />
            </div>
            <button className="btn-check">Check</button>
            <p className="output">
              Yayy! 😍
              <br /> angles do form a triangle
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IsTriangle;
