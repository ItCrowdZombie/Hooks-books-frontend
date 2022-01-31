import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import BookList from "./components/BookList";
import Book from "./components/Book";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <BookList />
    </div>
  );
}

export default App;
