
import './App.css';
import Header from "./components/list_event/Header/Header";
import SmallEventsList from "./components/list_event/SmallEventsList/SmallEventsList";
import Index from "./components/list_event";
import EventForm from "./components/EventForm";

function App() {
    return (
        <div>
            <Index/>
            <SmallEventsList/>
        </div>
    );
}

export default App;
