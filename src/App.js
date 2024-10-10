import Header from "./components/Header"
import Card from "./components/Card"
import travelData from "./travelData"

function App() {

    const data = travelData.map((item) => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })

  return (
    <div className="App">
          <Header />
          {data}
    </div>
  );
}

export default App;
