import { CounterSchema } from "2_entities/Counter";
import { UserSchema } from "2_entities/User";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
