import { createSelector } from '@reduxjs/toolkit';

import MainIcon from '@/1_shared/assets/icons/main.svg';
import AboutIcon from '@/1_shared/assets/icons/about.svg';
import ProfileIcon from '@/1_shared/assets/icons/profile.svg';
import ArticleIcon from '@/1_shared/assets/icons/article-20-20.svg';
import { RoutePath } from '@/1_shared/const/router';

import { getUserAuthData } from '@/2_entities/User';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      text: 'main',
      icon: MainIcon
    },
    {
      path: RoutePath.about,
      text: 'about',
      icon: AboutIcon
    }
  ];
  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        text: 'profile',
        icon: ProfileIcon,
        authOnly: true
      },
      {
        path: RoutePath.articles,
        text: 'articles',
        icon: ArticleIcon,
        authOnly: true
      }
    );
  }
  return sidebarItemsList;
});
