
export const deleteVideo = (id) => {
    const favorite = getVideos();
    const index = favorite.findIndex(item => item.id === id)
    if (index !== -1) {
        favorite.splice(index, 1)
        localStorage.setItem('favorite', JSON.stringify(favorite))
    }
}

export const addVideo = (video) => {
    const favorite = getVideos();
    const index = favorite.findIndex(item => item.id === video.id)
    if (index === -1) {
        favorite.push(video)
        localStorage.setItem('favorite', JSON.stringify(favorite))
    }
}

export const getVideos = () => {
    const favoriteString = localStorage.getItem('favorite');
    const favorite = favoriteString ? JSON.parse(favoriteString) : [];

    return favorite;
}

export const isFavorite = (id) => {
    const favorite = getVideos();

    const index = favorite.findIndex(item => item.id === id);

    return index !== -1;
}
