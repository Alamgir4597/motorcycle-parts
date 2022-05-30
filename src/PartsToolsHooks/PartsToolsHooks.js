import { useEffect, useState } from "react";

const useParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {

        fetch('https://stark-fjord-84862.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [parts,setParts])
    return [parts, setParts];
}
export default useParts;