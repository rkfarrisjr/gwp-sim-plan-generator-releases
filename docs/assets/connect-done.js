// connect-done.html (v3.1.0, Rick 2026-11-24): the message for Xano's /callback result. Text only (textContent), so the
// reason passed in the address can't add markup.
(function () {
  var q = new URLSearchParams(location.search);
  var r = q.get('result') || '';
  var M = {
    connected: ['Connected.', 'Jobber is connected again. Go back to the app — it picks up the connection.'],
    trial: ['Your full trial has started.', 'Jobber is connected. Go back to the app — it picks up the trial.'],
    used: ['This link has already been used.', 'If the app still shows Jobber disconnected, click Reconnect Jobber in the app again.'],
    expired: ['This link has expired.', 'Links work for 10 minutes. Go back to the app and click Reconnect Jobber again.'],
    invalid: ['This link isn\u2019t valid.', 'Go back to the app and click Reconnect Jobber (or Start your full trial) again.'],
    error: ['Jobber couldn’t be connected.', 'Go back to the app and try again, or ask your company’s account owner.']
  };
  var m = M[r];
  if (!m) return;
  document.getElementById('cd-title').textContent = m[0];
  document.getElementById('cd-text').textContent = m[1];
  var WHY = {
    other_company: 'This Jobber account is already connected to another company in the app.',
    other_account: 'Your company is connected to a different Jobber account. Sign in to Jobber with that account and try again.'
  };
  var why = WHY[q.get('why') || ''];
  if (r === 'error' && why) {
    var el = document.getElementById('cd-why');
    el.textContent = why;
    el.hidden = false;
  }
  document.title = m[0] + ' — GWP Sim Plan Generator';
})();
