import { useList } from "@refinedev/core";

export const ListTenders = () => {
  const { data, isLoading } = useList({
    resource: "tenders",
    pagination: { current: 1, pageSize: 10 },
    sorters: [{ field: "title", order: "ASC" }],
    filters: [{ field: "location", operator: "eq", value: "Houston" }],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Tenders</h1>
      <ul>
        {data?.data?.map((tender) => (
          <li key={tender.id}>
            <p>
              {tender.title}
              <br />
              Estimated Budget: {tender.estimated_budget}
              <br />
              Tender Requirements: {tender.requirements}
              <br />
              Location: {tender.location}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};