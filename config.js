// Tự động detect URL hiện tại
function getCurrentURL() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  // Fallback URLs cho các trường hợp phổ biến
  return "http://127.0.0.1:5500";
}

// Spotify API Configuration
const SPOTIFY_CONFIG = {
  CLIENT_ID: "ef5ed27877434bfe89b3f7e4594d7d38",
  CLIENT_SECRET: "0cd6600e31b44f6aa84b4451965fe3a0",
  get REDIRECT_URI() {
    return getCurrentURL();
  },

};

console.log(`
🎵 SPORTIFY WEB PLAYER
📝 Cấu hình: 
- Client ID: ${SPOTIFY_CONFIG.CLIENT_ID ? "✅" : "❌"}
- Client Secret: ${SPOTIFY_CONFIG.CLIENT_SECRET ? "✅" : "❌"}
- Redirect URI: ${SPOTIFY_CONFIG.REDIRECT_URI}
`);