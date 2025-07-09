// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 6,
          page: 1,
          sparkline: false,
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background px-4 py-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">
          🔥 Top 6 Cryptocurrencies
        </h2>

        {loading ? (
          <p className="text-center text-textSecondary">Loading data...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((coin) => (
              <div
                key={coin.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition p-5 flex items-center space-x-4"
              >
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <p className="text-lg font-semibold text-textPrimary dark:text-white">
                    {coin.name}
                  </p>
                  <p className="text-sm text-textSecondary">
                    ${coin.current_price.toLocaleString()}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      coin.price_change_percentage_24h >= 0
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                  >
                    {coin.price_change_percentage_24h.toFixed(2)}% today
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
