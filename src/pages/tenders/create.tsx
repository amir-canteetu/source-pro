import { useForm } from "@refinedev/core";

export const CreateTender = () => {
  const { onFinish, mutationResult } = useForm({
    action: "create",
    resource: "tenders",
  });

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
      <label htmlFor="name">Title</label>
      <input type="text" id="title" name="title" />

      <label htmlFor="description">Requirements</label>
      <textarea id="requirements" name="requirements" />

      <label htmlFor="price">Price</label>
      <input type="number" id="estimated_budget" name="estimated_budget" />

      <label htmlFor="price">procuring_company_id</label>
      <input type="number" id="procuring_company_id" name="procuring_company_id" />   

      <label htmlFor="price">tender_author_id</label>
      <input type="number" id="tender_author_id" name="tender_author_id" />             

      {mutationResult.isSuccess && <span>successfully submitted!</span>}
      <button type="submit">Submit</button>
    </form>
  );
};