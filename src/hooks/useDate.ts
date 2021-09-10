import { useState, useEffect } from "react";
import { UseDate } from "src/types";

export const useDate: UseDate = (created) => {
  const [timeAgo, setTimeAgo] = useState<string>("");

  // i had to wrap this in a useEffect (and create the state above), b/c otherwise it cries when i send a new message that createdAt is undefined, donno why yet
  useEffect(() => {
    if (created) {
      const realDate = new Date(
        created.seconds * 1000 + created.nanoseconds / 1000000
      );

      // i compare the time between now and the date of the message, in days
      const now = Date.now();
      const diffTime = Math.abs(Number(realDate) - now);
      const diffMinutes = Math.ceil(diffTime / (1000 * 60));
      const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const lessThanADay = diffHours < 24;
      const lessThanAnHour = diffMinutes < 60;

      setTimeAgo(
        new Intl.RelativeTimeFormat("es", {
          numeric: "auto",
        }).format(
          -Math.abs(
            lessThanADay ? (lessThanAnHour ? diffMinutes : diffHours) : diffDays
          ),
          lessThanADay ? (lessThanAnHour ? "minute" : "hour") : "day"
        )
      );
    }
  }, [created]);

  return {
    timeAgo,
  };
};
