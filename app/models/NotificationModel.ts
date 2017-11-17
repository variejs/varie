export default interface NotificationModel {
  title: string;
  message: string;
  severity: string;
  id: null | number | string;
  duration: number | undefined | null;
};
