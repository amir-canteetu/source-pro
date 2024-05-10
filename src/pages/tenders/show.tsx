import { useOne } from "@refinedev/core";

export const ShowTender = () => {
    const { data, isLoading } = useOne({ resource: "tenders", id: 1 });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <div>Tender title: {data?.data.title}</div>;
};