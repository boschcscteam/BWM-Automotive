// Company assets are temporarily stored in Azure Blob Storage.
// TODO: Migrate to Azure CDN before production.

const STORAGE =
"https://stasliinsecure047.blob.core.windows.net/images/";

document.getElementById("heroImage").src =
STORAGE + "hero.jpg";