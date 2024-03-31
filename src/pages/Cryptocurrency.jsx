import React, { useEffect, useState } from "react";

//Assets
import bitcoinIcon from "../assets/images/bitcoin_icon.png";

export const Cryptocurrency = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    try {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((res) => res.json())
        .then((res) => setData(res));

      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading || !data)
    return (
      <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-primary">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-primary">
        {error}
      </div>
    );

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <h1 className="lg:text-4xl text-2xl font-bold text-primary">
        Cryptocurrency Pricing
      </h1>

      <div className="grid lg:grid-cols-4 mt-10">
        <div className="lg:col-span-4 mb-4">
          <input
            type="text"
            placeholder="search"
            className="py-1 px-2 rounded-lg bg-accent"
          />
        </div>

        <CurrencyCard data={data} />
      </div>
    </div>
  );
};

const CurrencyCard = ({ data }) => {
  return (
    <div className="p-3 rounded-lg bg-accent">
      <div className="flex items-center text-xl font-medium text-white gap-3">
        <img src={bitcoinIcon} alt="bitcoin" />
        <p>{data.chartName}</p>
      </div>
      <p className="my-2 text-gray-400 text-sm leading-tight">
        Lorem ipsum dolor sit amet, consectetur adipisicing!
      </p>

      <div>
        {Object.keys(data.bpi).map((currency) => (
          <div
            key={currency}
            className="flex gap-1 md:text-2xl text-lg font-bold text-primary"
          >
            <p
              dangerouslySetInnerHTML={{
                __html: data.bpi[currency].symbol,
              }}
            />
            <p>
              {data.bpi[currency].rate} ({data.bpi[currency].code})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
