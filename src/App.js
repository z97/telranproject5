import './App.css';
import Header from "./components/list_event/Header/Header";
import SmallEventsList from "./components/list_event/SmallEventsList/SmallEventsList";
import Index from "./components/list_event";
import EventForm from "./components/EventForm";
import AboutSvetoslav from "./components/page/AboutSvetoslav";

function App() {
    return (
        <div>
            {/*<Index/>
            <SmallEventsList/>*/}
            <AboutSvetoslav/>
        </div>
    );
}

export default App;
