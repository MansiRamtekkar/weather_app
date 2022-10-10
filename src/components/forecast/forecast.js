import "./forecast.css";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <>
      <div className="forecast">
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 3).map((item, idx) => (
            <AccordionItem key={idx}>
              <div>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <div className="forecast-button">
                      <label className="day">{forecastDays[idx]}</label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="forecast-details">
                    <img
                      alt="forecast-icon"
                      className="icon-small"
                      src={`icons/${item.weather[0].icon}.jpg`}
                    />
                    <label className="min-max">
                      {Math.round(item.main.temp_max)}°C /{" "}
                      {Math.round(item.main.temp_min)}°C
                    </label>
                  </div>
                </AccordionItemPanel>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default Forecast;
