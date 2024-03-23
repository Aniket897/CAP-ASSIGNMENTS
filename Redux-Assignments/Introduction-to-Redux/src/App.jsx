import { useState } from "react";
import store from "./redux/store";
import { AddUSer } from "./redux/user/actions";
import { useSelector } from "react-redux";

const App = () => {
    const [name, setName] = useState("")
    const users = useSelector(state => state)

    return (
        <div>
            <p>{JSON.stringify(users)}</p>
            <div>
                <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter UserName"
                />
                <button onClick={() => {
                    if (name) store.dispatch(AddUSer(name))
                }}>Add User</button>
            </div>
        </div>
    )
}


export default App;