import { useEffect, useState } from "react";
import Text from "./Text/Text";

function ApiCaller() {
    const [joke, setJoke] = useState('Start up');
    const [loading, setLoading] = useState(false);

    const fetchJoke = () => {
        setLoading(true);

        fetch('https://api.chucknorris.io/jokes/random')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch joke");
                }

                return response.json();
            })
            .then((data) => {
                setJoke(data.value);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <>
            {loading ? <Text as="span">{'loading...'}</Text> : <Text as="span">{joke}</Text>}
            <br />
            <br />
            <button onClick={fetchJoke}>New Joke</button>
        </>
    );
}

export default ApiCaller;