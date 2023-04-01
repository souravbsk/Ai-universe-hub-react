import { useEffect, useState } from "react";

function DataLoad () {
    const [AiProduct, setAIproducts] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => setAIproducts(data.data.tools));
    },[])
    return AiProduct
}
export default DataLoad;