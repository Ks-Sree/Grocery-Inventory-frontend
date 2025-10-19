const API_URL = import.meta.env.VITE_API_URL || "https://grocery-inventory-xy29.onrender.com";
const BASE_URL = `${API_URL.replace(/\/$/, "")}/groceries`;

export const getItems = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addItem = async (item) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return res.json();
};

export const updateItem = async (id, item) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return res.json();
};

export const deleteItem = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
