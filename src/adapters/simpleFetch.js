import { useState, useEffect } from 'react';


const simpleFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortController = new AbortController()
        fetch(url, { signal: abortController.signal })
            .then((res) => {
                if(!res.ok) {
                    throw Error(`Unable to fetch data from endpoint ${url}`)
                }
                return res.json()
            })
            .then((data) => {
                setIsPending(false)
                setData(data)
                setError(null)
            })
            .catch((err) => {
                console.log(err.name)
                if (err.name === 'AbortError') {
                  console.log('fetch aborted')
                } else {
                  // auto catches network / connection error
                  setIsPending(false);
                  setError(err.message);
                }
            })
        return () => abortController.abort()
    }, [url])

    return { data, isPending, error }
}

export default simpleFetch