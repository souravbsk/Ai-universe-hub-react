import React, { useEffect, useState } from 'react';
import DataLoad from '../../Utilities/DataLoad';
import Card from '../Card/Card';

const Cards = ({isSorting,showMore,handleCartModal}) => {
   const AiProduct =  DataLoad();
   
 AiProduct.sort((a,b) => {
    
    if(isSorting){
        return new Date(b.published_in) - new Date(a.published_in);

    }
    else{
        return new Date(a.published_in) - new Date(b.published_in);
    }
     
   })
    return (
        <div className='grid md:grid-cols-3 gap-2'>
            {
              (showMore ? AiProduct : AiProduct.slice(0,6)).map(product => <Card key={product.id} handleCartModal={handleCartModal} product={product}></Card>)
            }
        </div>
    );
};

export default Cards;