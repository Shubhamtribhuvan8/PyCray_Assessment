import React, { createContext, useState, useEffect, useContext } from "react";
import { financialsById, properties } from "../../../apis/propertyApi";

const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [propertyData, setPropertyData] = useState({
    numberOfProperties: 0,
    averageOccupancyRate: 0,
    averageVacancyRate: 0,
    overallNetProfit: 0,
  });
  const [occupancyData, setOccupancyData] = useState([]);
  const [financialData, setFinancialData] = useState([]);
  const [loading, setLoading] = useState(true);

  const occupancyDataDummy = [
    {
      owner_name: "David Johnson",
      property_name: "Green View Apartments",
      total_units: 50,
      filled_units: 42,
      vacant_units: 8,
      occupancy_rate: "85%",
      last_maintenance_date: "2024-09-11",
    },
    {
      owner_name: "Alice Smith",
      property_name: "Green View Apartments",
      total_units: 60,
      filled_units: 45,
      vacant_units: 15,
      occupancy_rate: "75%",
      last_maintenance_date: "2024-09-11",
    },
    {
      owner_name: "John Doe",
      property_name: "Green View Apartments",
      total_units: 60,
      filled_units: 45,
      vacant_units: 15,
      occupancy_rate: "75%",
      last_maintenance_date: "2024-09-11",
    },
  ];

  const financialDataDummy = [
    {
      owner_name: "David Johnson",
      property_name: "Green View Apartments",
      income: "$25,000",
      expenses: "$15,000",
      net_profit: "$10,000",
    },
    {
      owner_name: "Alice Smith",
      property_name: "Green View Apartments",
      income: "$25,000",
      expenses: "$15,000",
      net_profit: "$10,000",
    },
    {
      owner_name: "John Doe",
      property_name: "Green View Apartments",
      income: "$25,000",
      expenses: "$15,000",
      net_profit: "$10,000",
    },
  ];

  const fetchData = async () => {
    try {
      setLoading(true);

      // Fetch occupancy data
      const occupancyResponse = await properties();
      const occupancyList = occupancyResponse?.data || occupancyDataDummy;
      setOccupancyData(occupancyList);

      // Fetch financial data based on occupancy data
      const financialPromises = occupancyList.map(async (property) => {
        const financialResponse = await financialsById(property.id);
        const financialList = financialResponse?.data || [];
        return financialList.map((financial) => ({
          ...financial,
          owner_name: property.owner_name,
          property_name: property.property_name,
        }));
      });

      const financialDataArray = await Promise.all(financialPromises);
      setFinancialData(financialDataArray.flat());

      // Calculate stats based on the fetched data
      const numberOfProperties = occupancyList.length;

      const totalOccupancyRate = occupancyList.reduce((acc, property) => {
        return acc + parseFloat(property.occupancy_rate);
      }, 0);

      const averageOccupancyRate = totalOccupancyRate / numberOfProperties;

      const totalVacancyRate = occupancyList.reduce((acc, property) => {
        const vacancyRate =
          (property.vacant_units / property.total_units) * 100;
        return acc + vacancyRate;
      }, 0);

      const averageVacancyRate = totalVacancyRate / numberOfProperties;

      const totalNetProfit = financialDataArray
        .flat()
        .reduce((acc, financial) => {
          return acc + parseFloat(financial.net_profit.replace(/[$,]/g, ""));
        }, 0);

      // Update state with calculated data

      console.log("numberOfProperties", numberOfProperties);
      console.log("averageOccupancyRate", averageOccupancyRate);
      console.log("averageVacancyRate", averageVacancyRate);
      console.log("totalNetProfit", totalNetProfit);

      setPropertyData({
        numberOfProperties,
        averageOccupancyRate: averageOccupancyRate.toFixed(2),
        averageVacancyRate: averageVacancyRate.toFixed(2),
        overallNetProfit: totalNetProfit,
      });
    } catch (error) {
      console.error("Error fetching data:", error);

      setOccupancyData(occupancyDataDummy);
      setFinancialData(financialDataDummy);

      const numberOfProperties = occupancyDataDummy.length;
      const totalOccupancyRate = occupancyDataDummy.reduce((acc, property) => {
        return acc + parseFloat(property.occupancy_rate);
      }, 0);
      const averageOccupancyRate = totalOccupancyRate / numberOfProperties;

      const totalVacancyRate = occupancyDataDummy.reduce((acc, property) => {
        const vacancyRate =
          (property.vacant_units / property.total_units) * 100;
        return acc + vacancyRate;
      }, 0);
      const averageVacancyRate = totalVacancyRate / numberOfProperties;

      const totalNetProfit = financialDataDummy.reduce((acc, financial) => {
        return acc + parseFloat(financial.net_profit.replace(/[$,]/g, ""));
      }, 0);

      setPropertyData({
        numberOfProperties,
        averageOccupancyRate: averageOccupancyRate.toFixed(2),
        averageVacancyRate: averageVacancyRate.toFixed(2),
        overallNetProfit: totalNetProfit,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PropertyContext.Provider
      value={{ propertyData, occupancyData, financialData, loading }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const usePropertyContext = () => useContext(PropertyContext);
