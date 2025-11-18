<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Admin - Messages</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 20px; }
    .card { border: 1px solid #ddd; padding: 12px; margin-bottom: 12px; border-radius: 8px; }
    button { margin-right: 8px; }
  </style>
</head>
<body>
  <h1>Admin — Hiring Requests</h1>
  <div id="hiring"></div>

  <h1>Admin — Contacts</h1>
  <div id="contacts"></div>

<script>
  const API = '';

  async function loadHiring() {
    const el = document.getElementById('hiring');
    el.innerHTML = 'Loading…';
    try {
      const res = await fetch('/api/hiring-requests');
      const data = await res.json();
      el.innerHTML = '';
      data.forEach(r => {
        const d = document.createElement('div'); d.className = 'card';
        d.innerHTML = `<strong>${r.name}</strong> — ${r.email} <div>${r.message || ''}</div><div style="margin-top:8px">Status: ${r.status}</div>`;
        const btn = document.createElement('button'); btn.textContent = 'Accept';
        btn.onclick = async () => {
          const a = await fetch(`/api/hiring-requests/${r.id}/accept`, { method: 'POST' });
          const j = await a.json();
          alert(j.message || 'Accepted');
          loadHiring();
        };
        d.appendChild(btn);
        el.appendChild(d);
      });
    } catch (e) { el.innerHTML = 'Failed to load'; }
  }

  async function loadContacts() {
    const el = document.getElementById('contacts');
    el.innerHTML = 'Loading…';
    try {
      const res = await fetch('/api/contacts');
      const data = await res.json();
      el.innerHTML = '';
      data.forEach(c => {
        const d = document.createElement('div'); d.className = 'card';
        d.innerHTML = `<strong>${c.name}</strong> — ${c.email} <div>${c.message || ''}</div><div style="margin-top:8px">Status: ${c.status}</div>`;
        const replyBtn = document.createElement('button'); replyBtn.textContent = 'Reply';
        replyBtn.onclick = async () => {
          const subject = prompt('Reply subject', 'Re: ' + (c.subject || 'Message'));
          const body = prompt('Reply body', 'Thanks for contacting me — I would like to discuss.');
          if (!subject || !body) return;
          const a = await fetch(`/api/contacts/${c.id}/reply`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({subject, body}) });
          const j = await a.json();
          alert(j.message || 'Replied');
          loadContacts();
        };
        d.appendChild(replyBtn);

        el.appendChild(d);
      });
    } catch (e) { el.innerHTML = 'Failed to load'; }
  }

  loadHiring(); loadContacts();
</script>
</body>
</html>
