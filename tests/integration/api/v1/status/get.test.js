test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  const paresedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(paresedUpdatedAt);

  expect(responseBody.dependencies.version).toBeDefined();
  expect(responseBody.dependencies.max_connections).toBeDefined();
  expect(responseBody.dependencies.opened_connections).toBeDefined();
});
