document.addEventListener('DOMContentLoaded', function() {
    initialApp();
});

async function initialApp(){
    let accessToken = await getSpotifyToken();
    if (accessToken) {
        
    }
}
async function getPopularTrack() {
    try {

    } catch (error) {
        
}

async function getSpotifyToken() {
  try {
    const credentials = btoa(
      `${SPOTIFY_CONFIG.CLIENT_ID}:${SPOTIFY_CONFIG.CLIENT_SECRET}`
    );
    const response = await axios.post(
     "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting token:", error);
    return null;
  }
}