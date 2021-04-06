const CLIENT_ID = "pqf0bo0hqjy192dva0zjfpfz3s7imt";
const CLIENT_SECRET = "64ycce2eo4of7y9co3r2ks4ojw30lo";

export const getAccessToken = async () => {
    const response = await fetch(
        `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`,
        {
            method: "POST",
        }
    );

    return await response.json();
};

export const searchVideos = async (search) => {
    const accesToken = (await getAccessToken()).access_token;

    const response = await fetch(
        `https://api.twitch.tv/helix/search/channels?query=` + search,
        {
            headers: {
                "Client-ID": CLIENT_ID,
                Authorization: `Bearer ${accesToken}`,
            },
        }
    );

    const json = await response.json();

    if (!json.data.length) {
        return;
    }

    const response2 = await fetch(
        `https://api.twitch.tv/helix/videos?user_id=` + json.data[0].id,
        {
            headers: {
                "Client-ID": CLIENT_ID,
                Authorization: `Bearer ${accesToken}`,
            },
        }
    );

    const json2 = await response2.json();

    return json2;
};
