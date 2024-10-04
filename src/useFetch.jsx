import { useState, useEffect } from 'react';

const useFetch = () => {
    const [data, setData]=useState(null)
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(null)
    const projectId = 'dryj08dni68f';

    const getData = (url) =>{
        fetch(url, {method:'get', headers:{ "Content-Type": "application/json", projectID: projectId}})
        .then((response)=>{ return response.json()})
        .then((response)=>{setData(response.data)})
        .catch((error)=>{setError(error)})
        .finally(()=>{setLoading(false)})
      }

    return { data, loading, error,  getData};
};

export default useFetch;
