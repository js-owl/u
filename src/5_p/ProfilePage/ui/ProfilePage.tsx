import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "1_shared/libs/hooks/useAppDispatch/useAppDispatch";
import {
  DynamicModuleLoader,
  ReducersList,
} from "1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader";
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  ProfileCard,
  profileReducer,
} from "2_entities/Profile";

const reducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ProfileCard data={data} isLoading={isLoading} error={error} />
      </div>
    </DynamicModuleLoader>
  );
};
export default ProfilePage;
