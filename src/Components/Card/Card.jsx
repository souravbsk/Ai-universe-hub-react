import React from "react";

const Card = ({ product, handleCartModal }) => {
  const { image, features, name, published_in, id } = product;

  return (
    <div className="bg-base-100 p-5">
      <div className="card shadow-xl gap-7 h-full">
        <figure className="rounded-lg flex-shrink-0">
          <img className="w-full h-48" src={image} alt="Shoes" />
        </figure>
        <div className=" h-60 flex flex-col justify-between">
          <div>
            <h2 className="card-title font-bold text-2xl mb-3">Feature:</h2>
            <ul className="list-inside list-decimal">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="my-3">
            <hr className="border-2 mb-3 border-gray-200" />
            <div className="flex items-center justify-between">
              <div>
                <h2 className="card-title font-bold text-xl mb-3">{name}</h2>
                <p className="flex items-center gap-2">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                      />
                    </svg>
                  </span>
                  <span>{published_in}</span>
                </p>
              </div>
              <div className="ddcard-actions justify-end">
                <label
                  htmlFor="my-modal-5"
                  onClick={() => handleCartModal(id)}
                  className="btn text-red-400 bg-red-100 px-3 py-3 rounded-full ddbtn-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
