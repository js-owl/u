export { profileActions, profileReducer } from "./model/slice/profileSlice";

export { Profile, ProfileShema } from "./model/types/profile";

export { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";

export { ProfileCard } from "./ui/ProfileCard/ProfileCard";

export { getProfileData } from "./model/selectors/getProfileData/getProfileData";
export { getProfileForm } from "./model/selectors/getProfileForm/getProfileForm";
export { getProfileIsLoading } from "./model/selectors/getProfileIsLoading/getProfileIsLoading";
export { getProfileError } from "./model/selectors/getProfileError/getProfileError";
export { getProfileReadonly } from "./model/selectors/getProfileReadonly/getProfileReadonly";
