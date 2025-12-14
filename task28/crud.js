const items = [
  { id: 1, type: "Iphone" },
  { id: 2, type: "Samsung" },
  { id: 3, type: "Huawei" }
];

const handleReq = (req) => {
  let body = "";
  return new Promise((resolve, reject) => {
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => resolve(body));
    req.on("error", (err) => reject(err));
  });
};

function parseJson(body, res) {
  try {
    return JSON.parse(body);
  } catch {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Invalid JSON format" }));
    return null;
  }
}

const createItem = async (req, res) => {
  const body = await handleReq(req);
  const newItem = parseJson(body, res);
  if (!newItem) return;

  if (typeof newItem.id !== "number" || !newItem.type) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "id must be a number and type is required" }));
    return;
  }

  items.push(newItem);
  res.writeHead(201, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Item successfully added", item: newItem }));
};

const readItems = () => items;

const removeItem = async (req, res) => {
  const body = await handleReq(req);
  const parsed = parseJson(body, res);
  if (!parsed) return;

  const { id } = parsed;
  if (typeof id !== "number") {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "id must be a number" }));
    return;
  }

  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    const removed = items.splice(index, 1);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(removed[0]));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Item not found" }));
  }
};

const updateItem = async (req, res) => {
  const body = await handleReq(req);
  const updated = parseJson(body, res);
  if (!updated) return;

  if (typeof updated.id !== "number") {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "id must be a number" }));
    return;
  }

  const index = items.findIndex((item) => item.id === updated.id);
  if (index !== -1) {
    items[index] = { ...items[index], ...updated };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(items[index]));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Item not found" }));
  }
};

module.exports = {
  createItem,
  readItems,
  removeItem,
  updateItem
};