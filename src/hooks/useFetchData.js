// import { useState, useEffect } from "react";


// const useFetchData = (url) => {
//     const [data, setData] = useState([]);
//     const [isLoanding, setIsloanding] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setIsloanding(true);
//         fetch(url)
//             .then((res) => res.json())
//             .then((json) => setData(json))
//             .catch((err) => setError(err))
//             .finally(()=>setIsloanding(false))
//     }, [url])

//     const reset = () => {
//         setData([]);
//         setIsloanding(false);
//         setError(null);
//     }
//     return
//     { data,isLoanding, error, reset()};
// }

// export default useFetchData;