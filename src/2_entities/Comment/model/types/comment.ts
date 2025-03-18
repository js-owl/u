import { User } from "2_entities/User";

export interface Comment {
  id: string;
  text: string;
  user: User;
}
