export default async function handler(req, res) {
  try {
    const response = await fetch("https://app.pakasir.com/api/transaction/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer AntWx6bLAuDd9f177kLVWWjlT8yhawZc"
      },
      body: JSON.stringify({
        amount: 1000,
        note: "Test QRIS"
      })
    });

    const data = await response.json();

    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}