// Service worker do Tasks (tasks.frisk.pt) — notificações de lembretes
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

self.addEventListener('push', e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (_) { d = { title: 'Tasks', body: e.data && e.data.text() }; }
  const opts = {
    body: d.body || '',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: d.id || 'tasks',
    renotify: true,
    requireInteraction: !d.test,
    data: d,
    actions: d.id ? [{ action: 'snooze', title: 'Adiar 1 hora' }, { action: 'done', title: 'Concluir' }] : []
  };
  e.waitUntil(self.registration.showNotification(d.title || 'Tasks', opts));
});

self.addEventListener('notificationclick', e => {
  const d = e.notification.data || {};
  e.notification.close();
  if (e.action === 'snooze' && d.id && d.fn) {
    e.waitUntil(fetch(d.fn, { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'snooze', id: d.id, token: d.token, minutes: 60 }) }).catch(() => {}));
    return;
  }
  const act = e.action === 'done' ? 'done' : 'open';
  const url = d.id ? (d.url || '/') + '&a=' + act : (d.url || '/');
  e.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of all) {
      if (new URL(c.url).origin === self.location.origin) {
        c.postMessage({ type: 'reminder', id: d.id, action: act });
        return c.focus();
      }
    }
    return self.clients.openWindow(url);
  })());
});
