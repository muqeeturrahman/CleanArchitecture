// src/core/entities/user.entity.ts
import { BaseEntity } from './base.entity';

export interface UserProps {
  fullName: string;
  phoneNumber?: string;
  email: string;
  username?: string;
  password?: string;
  profilePicture?: string | null;
  dateOfBirth?: Date;
  gender?: string;
  bio?: string;
  location?: string;
  deviceToken?: string[];
  isDeleted?: boolean;
  isPrivate?: boolean;
  isAdmin?: boolean;
  isSuspended?: boolean;
  isSubscribed?: boolean;
}

export class User extends BaseEntity {
  private props: UserProps;

  constructor(props: UserProps, id?: string) {
    super(id);
    this.props = {
      ...props,
      isDeleted: props.isDeleted ?? false,
      isPrivate: props.isPrivate ?? false,
      isAdmin: props.isAdmin ?? false,
      isSuspended: props.isSuspended ?? false,
      isSubscribed: props.isSubscribed ?? false,
    };
  }

  get fullName() { return this.props.fullName; }
  get phoneNumber() { return this.props.phoneNumber; }
  get email() { return this.props.email; }
  get username() { return this.props.username; }
  get password() { return this.props.password; }
  get profilePicture() { return this.props.profilePicture; }
  get dateOfBirth() { return this.props.dateOfBirth; }
  get gender() { return this.props.gender; }
  get bio() { return this.props.bio; }
  get location() { return this.props.location; }
  get deviceToken() { return this.props.deviceToken; }
  get isDeleted() { return this.props.isDeleted; }
  get isPrivate() { return this.props.isPrivate; }
  get isAdmin() { return this.props.isAdmin; }
  get isSuspended() { return this.props.isSuspended; }
  get isSubscribed() { return this.props.isSubscribed; }

  static fromPersistence(rec: any): User {
    return new User(
      {
        fullName: rec.fullName,
        phoneNumber: rec.phoneNumber,
        email: rec.email,
        username: rec.username,
        password: rec.password,
        profilePicture: rec.profilePicture,
        dateOfBirth: rec.dateOfBirth,
        gender: rec.gender,
        bio: rec.bio,
        location: rec.location,
        deviceToken: rec.deviceToken,
        isDeleted: rec.isDeleted,
        isPrivate: rec.isPrivate,
        isAdmin: rec.isAdmin,
        isSuspended: rec.isSuspended,
        isSubscribed: rec.isSubscribed,
      },
      rec.id,
    );
  }
}
