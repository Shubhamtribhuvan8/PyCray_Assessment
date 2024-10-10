import React from "react";
import { usePropertyContext } from "./ContextApi/ContextAPI ";

const Card = ({ children, className }) => (
  <div className={`rounded-lg ${className}`}>{children}</div>
);

const CardContent = ({ children }) => (
  <div className="p-4 flex flex-col h-full">{children}</div>
);

const SummaryCard = ({ title, value, color, description = "Lorem ipsum" }) => (
  <Card className={`${color} overflow-hidden`}>
    <CardContent>
      <h3 className="text-sm font-medium mb-2 text-gray-800">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-auto">{value}</p>
      <p className="text-xs text-gray-600 mt-2">{description}</p>
    </CardContent>
  </Card>
);

const SummaryCards = () => {
  const { propertyData, loading } = usePropertyContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(
    propertyData.numberOfProperties,
    propertyData.averageOccupancyRate,
    propertyData.averageVacancyRate,
    propertyData.overallNetProfit
  );
  const cardData = [
    {
      title: "Number of properties",
      value: propertyData.numberOfProperties || "3",
      color: "bg-purple-100",
    },
    {
      title: "Average Occupancy Rate",
      value: `${propertyData.averageOccupancyRate}%` || "80%",
      color: "bg-green-100",
    },
    {
      title: "Average Vacancy Rate",
      value: `${propertyData.averageVacancyRate}%` || "85%",
      color: "bg-pink-100",
    },
    {
      title: "Overall Net Profit",
      value: `${propertyData.overallNetProfit}` || "$50,000",
      color: "bg-yellow-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {cardData.map((card, index) => (
        <SummaryCard
          key={index}
          title={card.title}
          value={card.value}
          color={card.color}
        />
      ))}
    </div>
  );
};

export default SummaryCards;
