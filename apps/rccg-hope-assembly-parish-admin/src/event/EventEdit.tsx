import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LivestreamTitle } from "../livestream/LivestreamTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="EndTime" source="endTime" />
        <TextInput label="ImageUrl" source="imageUrl" />
        <ReferenceArrayInput
          source="livestreams"
          reference="Livestream"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LivestreamTitle} />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="StartTime" source="startTime" />
      </SimpleForm>
    </Edit>
  );
};
