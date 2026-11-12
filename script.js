'use strict';

// Invitation officielle publique, également présente dans le HTML pour fonctionner sans JavaScript.
const SITE_CONFIG = Object.freeze({
  discordInviteUrl: 'https://discord.gg/yNKcpr32WK'
});

function getDiscordInvite(value) {
  try {
    const url = new URL(value);
    const isInvite = (url.hostname === 'discord.gg' && /^\/[A-Za-z0-9-]+\/?$/.test(url.pathname)) ||
      (url.hostname === 'discord.com' && /^\/invite\/[A-Za-z0-9-]+\/?$/.test(url.pathname));
    return url.protocol === 'https:' && !url.username && !url.password && !url.port && isInvite ? url.href : null;
  } catch {
    return null;
  }
}

const invitation = getDiscordInvite(SITE_CONFIG.discordInviteUrl);
if (invitation) {
  document.querySelectorAll('[data-discord]').forEach((link) => {
    link.href = invitation;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${link.textContent.trim()} (nouvel onglet)`);
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

// Ouvrir les informations de pied de page, y compris depuis un lien direct.
function revealLinkedDetails() {
  const target = document.getElementById(window.location.hash.slice(1));
  if (target instanceof HTMLDetailsElement) target.open = true;
}
window.addEventListener('hashchange', revealLinkedDetails);
document.querySelectorAll('.footer nav a').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.getElementById(link.hash.slice(1));
    if (target instanceof HTMLDetailsElement) target.open = true;
  });
});
revealLinkedDetails();
