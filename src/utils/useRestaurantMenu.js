import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantmenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log("resInfo", resInfo)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/" + MENU_API_URL + resId);
    console.log("data", data)
    const json = await data.json();
    console.log("json", json)
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantmenu;
