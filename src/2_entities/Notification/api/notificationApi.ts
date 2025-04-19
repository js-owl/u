import { rtkApi } from '@/1_shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotificationList: build.query<Notification[], null>({
      query: () => ({ url: '/notifications' })
    })
  })
});

export const useNotifications = notificationApi.useGetNotificationListQuery;
