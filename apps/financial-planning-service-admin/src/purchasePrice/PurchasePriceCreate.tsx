import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PurchasePriceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="productId" source="productId" />
      </SimpleForm>
    </Create>
  );
};
