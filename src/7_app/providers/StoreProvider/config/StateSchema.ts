import { CounterSchema } from "2_entities/Counter";
import { UserSchema } from "2_entities/User";
import { LoginSchema } from "3_features/AuthByUsername";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema;
}
