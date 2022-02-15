import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAuth } from "../../context/AuthContext";
import "./companies.css";
import SingleCompany from "./single-company/SingleCompany";

const Companies = () => {
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(null);

  const { getToken } = useAuth();
  const token = getToken();
  // ?skip=8
  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://devapi.dhakai.com/api/v2/manufacturers?limit=8`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const data = await response.json();
        console.log(data.result.manufacturers);
        setCompanies(data.result.manufacturers);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchCompanies();
    return () => {};
  }, []);

  //fetch data function
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://devapi.dhakai.com/api/v2/manufacturers?skip=8`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const data = await response.json();
      setCompanies((prevCompanies) => {
        return [...prevCompanies, ...data.result.manufacturers];
      });
      console.log(companies);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div className='companies'>
      {companies.length > 0 && (
        <InfiniteScroll
          dataLength={companies.length}
          next={fetchData}
          hasMore={companies.length !== 13}
          loader={<h3 className='loading'>Loading ...</h3>}
          className='companies'
        >
          {companies.map((company) => (
            <SingleCompany
              key={Date.now() + Math.random()}
              addresses={company.addresses[0]}
              companyName={company.meta.companyName}
              banners={company.meta.banners}
              logo={company.meta.logo}
              orderQuantity={company.minOrderQty}
              {...company}
            />
          ))}
        </InfiniteScroll>
      )}

      {loading && <h3 className='loading'>Loading ...</h3>}
      {error && <h3>{error.message}</h3>}
    </div>
  );
};

export default Companies;
