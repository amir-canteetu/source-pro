import { useOne, useUpdate } from "@refinedev/core";

export const EditTender = () => {
  const { data, isLoading } = useOne({ resource: "tenders", id: 2 });
  const { mutate, isLoading: isUpdating } = useUpdate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const updatePrice = async () => {
    await mutate({
      resource: "tenders",
      id: 2,
      values: {
        estimated_budget: Math.floor(Math.random() * 100),
      },
    });
  };

  return (
    <div>
      <div>Tender Title: {data?.data.estimated_budget}</div>
      <div>Tender price: ${data?.data.estimated_budget}</div>
      <button onClick={updatePrice}>Update Budget</button>
    </div>
  );
};