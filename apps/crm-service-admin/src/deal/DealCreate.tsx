import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TenantTitle } from "../tenant/TenantTitle";

export const DealCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ownerId" source="ownerId" />
        <TextInput label="productId" source="productId" />
        <ReferenceInput source="tenant.id" reference="Tenant" label="Tenant">
          <SelectInput optionText={TenantTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
