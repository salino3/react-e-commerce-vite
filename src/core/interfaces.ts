export type AllAction = LoadDataAction | Change_CheckBox | Change_All_False;

interface LoadDataAction {
  type: "LOAD_DATA";
  payload: ProductInfo[];
}

interface Change_CheckBox {
  type: "CHANGE_CHECKBOX";
  payload: number;
}

interface Change_All_False {
  type: "CHANGE_ALL_FALSE";
  payload: ProductInfo[];
}

export interface ProductInfo {
  id: number;
  picUrl: string;
  title: string;
  selected: boolean;
  price: number;
  type: string;
}

export interface MyState {
  state: {
    products: ProductInfo[];
  };
  dispatch: React.Dispatch<AllAction>;
  loadData: () => void;
  CheckboxChange: (id: number) => void;
  DeselectAll: () => void;
}
