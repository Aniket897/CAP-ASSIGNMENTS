import { useState } from "react";
import DataDisplay from "./components/DataDisplay";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        setLoading(true)
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts");
            response = await response.json();
            setData(response)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <button onClick={fetchData}>Fetch Posts</button>
            {loading && !data.length && !error && (
                <div className="container">
                    <p>Loading....</p>
                </div>
            )}
            {!loading && !data.length && error && (
                <div className="container">
                    <p className="error">Error occure...</p>
                </div>
            )}

            {!loading && !error && (
                <DataDisplay data={data} />
            )}

        </div>
    )
}

export default App;