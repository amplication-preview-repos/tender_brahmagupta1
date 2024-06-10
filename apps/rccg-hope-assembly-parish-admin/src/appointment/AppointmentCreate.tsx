import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { MemberTitle } from "../member/MemberTitle";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <ReferenceInput source="member.id" reference="Member" label="Member">
          <SelectInput optionText={MemberTitle} />
        </ReferenceInput>
        <TextInput label="Time" source="time" />
      </SimpleForm>
    </Create>
  );
};
