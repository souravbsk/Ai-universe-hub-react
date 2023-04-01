import React from "react";

const Modal = ({ singleData }) => {
  console.log(singleData);
  const {description,features,pricing,integrations,image_link,accuracy,input_output_examples} = singleData;
  console.log(pricing);
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="grid md:p-7 md:grid-cols-2 gap-3">
            <div className="border-2 border-red-300 bg-red-50 p-5 rounded-2xl">
              <h3 className="font-bold text-lg">
                {description ? description : "Content Not Found"}
              </h3>
              <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center items-center my-6">
                <div className="px-6 py-3 flex place-items-center max-w-full w-36 h-[100px] bg-white rounded-2xl">
                  <h1 className="font-semibold text-center text-green-700">
                    {
                     pricing ?  pricing[0]?.price + ' '+
                    
                     pricing[0]?.plan  : 'Free of Cost/Basic'  
                      
                    }
                  </h1>
                </div>
                <div className="px-6 py-3 flex place-items-center max-w-full w-36 h-[100px] bg-white rounded-2xl">
                  <h1 className="font-semibold text-center text-orange-300">
                  {
                     pricing ?  pricing[1]?.price + ' '+
                    
                     pricing[1]?.plan  : 'Free Of Cost/Pro'  
                      
                    }
                  </h1>
                </div>
                <div className="px-5 py-3 flex place-items-center max-w-full w-36 h-[100px] bg-white rounded-2xl">
                  <h1 className="font-semibold text-center text-red-300">
                  {
                     pricing ?  pricing[2]?.price + ' '+
                    
                     pricing[2]?.plan  : 'Free of Cost /Enterprise'  
                      
                    }
                  </h1>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-2">
                <div>
                  <h3 className="font-bold text-lg mb-4">Features</h3>
                  <ul className="text-sm list-inside pl-2 space-y-1 list-disc">

                  {
                    features ?   Object.values(features).map((feature,i) => <li key={i}>{feature?.feature_name}</li>) : 'data no found'
                  }
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Integrations</h3>
                  <ul className="text-sm list-inside pl-2 space-y-1 list-disc">
                    {
                       integrations ? integrations.map((init,i) => <li key={i}>{init}</li>) : "not found"
                    }
                  </ul>
                </div>
              </div>
            </div>
            <div className="border rounded-2xl p-5">
              <div className="relative">
                <img
                  className="rounded-2xl w-full h-64 object-fill"
                  src={image_link && image_link[0]}
                  alt=""
                />
                {
                  accuracy?.score && <span className="bg-red-500 text-white font-bold px-6 py-1 absolute top-4 right-4 rounded-xl">{accuracy.score*100}% accuracy</span>
                }
                
              </div>
              <div className="mt-6 px-2 md:px-12 space-y-2">
                <h3 className="font-bold text-lg text-center">
                  {
                    input_output_examples ? input_output_examples[0]?.input : 'Can you give any example?'
                  }
                </h3>
                <p className="text-sm text-center">
                {
                    input_output_examples ? input_output_examples[0]?.output : 'No! Not Yet! Take a break!!!'
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
