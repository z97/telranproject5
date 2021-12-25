import logo from './logo.svg';
import './App.css';
import Header from "./components/list_event/Header/Header";
import SmallEventsList from "./components/list_event/SmallEventsList/SmallEventsList";
import Index from "./components/list_event";
import Form from "./components/Form";

function App() {
    return (
        <div>
            <Index/>
            <Form/>
        </div>
    );
}

export default App;
