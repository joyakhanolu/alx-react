import * as notificationsData from "../../notifications.json";

export function getAllNotificationsByUser(userId) {
  return notificationsData.default
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
}
