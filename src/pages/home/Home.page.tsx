import axios from "axios";
import { useCallback, useState } from "react";

import Button from "../../components/button/Button";
import styles from "./home.module.css";

import { SingeCityWeatherDTO } from "../../types/dto-types";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<SingeCityWeatherDTO | null>(
    null
  );

  const getCurrentAirQuality = useCallback(async () => {
    try {
      setIsLoading(true);

      const request = await axios.get<SingeCityWeatherDTO>(
        "/current/airquality",
        {
          params: { lon: "30.523333", lat: "50.450001" },
        }
      );

      if (request.status === 200) {
        setWeatherData(request.data);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className={styles["container"]}>
      hello from home page
      <Button disabled={isLoading} onClick={getCurrentAirQuality}>
        Gen some API data
      </Button>
      {weatherData ? (
        <>
          <h2>{weatherData.timezone}</h2>

          <p>{weatherData.country_code}</p>

          <p>{weatherData.data.map((el) => el.co)}</p>
        </>
      ) : null}
    </div>
  );
};

export default HomePage;
