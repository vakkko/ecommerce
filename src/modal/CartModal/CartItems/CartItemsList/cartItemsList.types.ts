export type DeleteItemParams = {
  id: number;
  color: string;
  size: string;
};

export type ChangeItemParams = DeleteItemParams & {
  index: number;
  quantity: number;
};
