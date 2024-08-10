import { useEffect, useState } from "react";
import "./CountryList.css";

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
      } catch (error) {
        setError(error.message);
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
      <h1> Countries List</h1>
      <div className="enclosing-container">
        <div className="table">
          <div className="header">
            <div className="column name-header">Name</div>
            <div className="column flag-header">Flag</div>
          </div>
          {countries.map((country) => (
            <div className="row" key={country.cca3}>
              <div className="column country-name">{country.name.common}</div>
              <div className="column flag">
                <img
                  src={country.flags.svg}
                  alt={`${country.name.common} flag`}
                  className="flag-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountryList;
