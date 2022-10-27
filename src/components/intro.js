import '../App.css';

function Intro(props) {
    console.log("param from app.js: ", props.nama)
  return (
  <div className="App">
    <p> parma from app.js: {props.nama}</p>
    </div>
  );
}

export default Intro;