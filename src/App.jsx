import Color from "./components/color";
import Counter from "./components/Counter";
import StateColor from "./components/StateColor";
import CountriesItem from "./components/CountriesItem";
import countriesCapitals from "./components/countriesCapitals";
function App() {
    const countriesItems = countriesCapitals.map((con, idx) => (
        <CountriesItem country={con} key={idx} />
    ))
    return (
        // <div>
        //      {countriesItems}
        // </div>
        <div className="flex justify-center bg-stone-100 border border-red-500 m-2">
            <div className="w-full max-w-5xl flex flex-wrap justify-center border border-blue-500 m-2">
                {countriesItems}
            </div>
        </div>
        // <div>
        //     <Color color='blue'/>
        //     <Counter/>
        //     <StateColor/>
        // </div>

    )

}
export default App;
