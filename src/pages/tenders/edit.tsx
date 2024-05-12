import { useOne, useUpdate } from "@refinedev/core";

export const EditTender = () => {
  const { data, isLoading } = useOne({ resource: "tenders", id: 1 });
  const { mutate, isLoading: isUpdating } = useUpdate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const updatePrice = async () => {
    await mutate({
      resource: "tenders",
      tender_id: 1,
      values: {
        estimated_budget: Math.floor(Math.random() * 100),
      },
    });
  };

  return (
    <div>
      <div>Product name: {data?.data.title}</div>
      <div>Product price: ${data?.data.estimated_budget}</div>
      <button onClick={updatePrice}>Update Price</button>
    </div>
  );
};