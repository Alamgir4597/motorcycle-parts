import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/patrs')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [parts,setParts])
    return [parts, setParts];
}
export default useParts;