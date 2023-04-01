import { useState } from "react";
import { notifications } from "../data";

export default function useNotifications() {
  const [notis, setNotis] = useState(notifications);

  const markAllAsRead = () => {
    const newNotis = notifications.map((noti) => {
      if (noti.unread) {
        noti.unread = false;
      }

      return noti;
    });

    setNotis(newNotis);
  };

  return [notis, markAllAsRead];
}
