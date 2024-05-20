import type { DataProvider } from "@refinedev/core";

const API_URL = "http://localhost:3000/api";

// Helper function to get headers
const getHeaders = () => {
    const token = localStorage.getItem("jwt_token");
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
    };
};

// Helper function to handle responses
const handleResponse = async (response) => {
    if (response.status < 200 || response.status > 299) {
        const error = await response.json();
        throw new Error(error.message || 'An error occurred');
    }
    return response.json();
};

export const dataProvider: DataProvider = {
    getOne: async ({ resource, id, meta }) => {
        const response = await fetch(`${API_URL}/${resource}/${id}`, {
            headers: getHeaders(),
        });
        return { data: await handleResponse(response) };
    },
    getApiUrl: () => API_URL,
    update: async ({ resource, id, variables }) => {
        const response = await fetch(`${API_URL}/${resource}/${id}`, {
            method: "PATCH",
            body: JSON.stringify(variables),
            headers: getHeaders(),
        });
        return { data: await handleResponse(response) };
    },
    getList: async ({ resource, pagination, filters, sorters, meta }) => {
        const params = new URLSearchParams();

        if (pagination) {
            params.append("page", pagination.current);
            params.append("limit", pagination.pageSize);
        }

        if (sorters && sorters.length > 0) {
            params.append("sortBy", sorters.map((sorter) => sorter.field).join(","));
            params.append(
                "sortOrder",
                sorters.map((sorter) => sorter.order).join(",")
            );
        }

        if (filters && filters.length > 0) {
            filters.forEach((filter) => {
                if ("field" in filter && filter.operator === "eq") {
                    params.append(filter.field, filter.value);
                }
            });
        }

        const response = await fetch(`${API_URL}/${resource}?${params.toString()}`, {
            headers: getHeaders(),
        });
        return {
            data: await handleResponse(response),
            total: 0, // Adjust as necessary
        };
    },
    create: async ({ resource, variables }) => {
        const response = await fetch(`${API_URL}/${resource}`, {
            method: "POST",
            body: JSON.stringify(variables),
            headers: getHeaders(),
        });
        return { data: await handleResponse(response) };
    },
    deleteOne: () => {
        throw new Error("Not implemented");
    },
   
};
