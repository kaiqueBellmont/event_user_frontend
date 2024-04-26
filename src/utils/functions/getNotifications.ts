import { getToken } from "./getToken";

export const fetchNotificationsData = async () => {
  try {
    const token = getToken();

    const response = await fetch("http://localhost:8000/users/notifications/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
