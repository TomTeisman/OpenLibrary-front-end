import { useCallback, useEffect, useState } from 'react';

function useFetch<Type>( url: string, immediate = true) {
    const [data, setData] = useState<Type | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const refetch = useCallback(async () => {
        setLoading(true);
        setError(null);

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                return response.json();
            }).then((response) => {
                const result: Type = response;
                setData(result);
            })
            .catch((responseError) => {
                setError(responseError);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    useEffect(() => {
        if (immediate) {
            refetch();
        }
    }, [immediate, refetch]);

    return { data, loading, error, refetch };
}

export default useFetch;