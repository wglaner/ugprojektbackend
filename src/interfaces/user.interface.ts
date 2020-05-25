export interface User extends Document {
  readonly _id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly role: string;
}
