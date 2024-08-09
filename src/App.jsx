import CountryList from "./components/FetchingData";
import Heading from "./components/Heading";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Heading></Heading>
        <Title />
        <CountryList />
      </div>
    </>
  );
}

export default App;
