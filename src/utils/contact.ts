export async function submitContact(data: FormData, request: typeof fetch = fetch): Promise<void> {
  const body = new URLSearchParams();
  for (const [key, value] of data.entries()) {
    if (typeof value === 'string') body.append(key, value);
  }
  body.set('form-name', 'contact');
  const response = await request('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error('Message delivery failed.');
}
