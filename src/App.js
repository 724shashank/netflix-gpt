import "./App.css";
import ReactDOM from "react-dom/client";
const App = ()=>{
    return(<>
    
    <div className="text-3xl font-bold bg-pink-200">This Page is Not Refreshed</div>
    
    </>)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
