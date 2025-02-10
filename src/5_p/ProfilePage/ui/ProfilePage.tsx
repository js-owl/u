import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "1_shared/libs/c/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "2_entities/Profile";

const reducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>{t("profile page")}</div>
    </DynamicModuleLoader>
  );
};
export default ProfilePage;
