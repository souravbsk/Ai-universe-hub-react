import { useEffect, useState } from "react";

function singleDataLoad(AiCardId) {
  const [singleAiProduct, setsingleAiProduct] = useState({});
  useEffect(() => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${AiCardId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          setsingleAiProduct(data.data);
        }
      });
  }, [AiCardId]);
  return singleAiProduct;
}
export default singleDataLoad;
