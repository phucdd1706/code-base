// THIRD-PARTY IMPORTS
import React from 'react';

// PROJECT IMPORTS
import { UserStateProps } from '~/types/user';

export interface DefaultRootStateProps {
  user: UserStateProps;
}

export type GuardProps = {
  children: React.ReactElement | null;
};

export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};
