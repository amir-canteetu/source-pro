import { useForm, useSelect } from "@refinedev/core";

export const EditTender = () => {
  const { onFinish, mutationResult, queryResult } = useForm({
    action: "edit",
    resource: "tenders",
    id: "1",
  });

  const record = queryResult.data?.data;

  // const { options } = useSelect({
  //   resource: "categories",
  // });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Using FormData to get the form values and convert it to an object.
    const data = Object.fromEntries(new FormData(event.target).entries());
    // Calling onFinish to submit with the data we've collected from the form.
    onFinish({
      ...data,
      estimated_budget: Number(data.estimated_budget).toFixed(2)
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="title" name="title" defaultValue={record?.title} />

      <label htmlFor="description">Description</label>
      <textarea
        id="requirements"
        name="requirements"
        defaultValue={record?.requirements}
      />

      <label htmlFor="price">Price</label>
      <input
        type="text"
        id="estimated_budget"
        name="estimated_budget"
        pattern="\d*\.?\d*"
        defaultValue={record?.estimated_budget}
      />

      {mutationResult.isSuccess && <span>successfully submitted!</span>}
      <button type="submit">Submit</button>
    </form>
  );
};