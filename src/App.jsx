import NoteList from "./components/noteList";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="container p-4 mx-auto grid grid-cols-4">
      <Sidebar />
      <div className="col-span-3">
      <NoteList />
      </div>
    </div>
  );
}

export default App;
