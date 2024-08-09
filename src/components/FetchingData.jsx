import React, { useEffect, useState } from "react";
import "./CountryList.css"; // Import a CSS file for styling

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/independent?status=true"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <div className="countries-list">
        {countries.map((country) => (
          <div className="country-item" key={country.cca3}>
            <span className="country-name">{country.name.common}</span>
            <img
              src={country.flags.svg}
              alt={`${country.name.common} flag`}
              className="flag"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryList;
