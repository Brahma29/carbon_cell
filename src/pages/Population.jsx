import React, { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const Population = () => {
  const [data, setData] = useState([]);
  const [formattedData, setFormattedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    try {
      fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
        .then((res) => res.json())
        .then((res) => {
          setFormattedData(
            res.data.map((entry) => ({
              name: entry.Year,
              Population: entry.Population,
              amt: entry.Population,
            }))
          );
          setData(res.data);
        });
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
        Graph Population Data
      </h1>

      <div className="w-full md:h-96 h-40 md:mt-20 mt-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={formattedData}
            margin={{
              top: 5,
              right: 30,
              left: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="amt" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Population" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <div className="text-center md:text-2xl font-bold text-primary mt-4">
          Population of {data[0]?.Nation}
        </div>
      </div>
    </div>
  );
};
