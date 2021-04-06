import { useEffect, useState } from 'react';
import { MainLayout } from "../components/main-layout/main-layout";
import { getVideos } from '../stores/favorite.store';
import { deleteVideo } from '../stores/favorite.store';
import { VideoCards } from '../components/video-cards/video-cards';

const About = () => {
    const [favorites, setFavorites] = useState([]);

    const handleClickDelete = (id) => {
        deleteVideo(id);
        setFavorites(getVideos());
    };

    useEffect(() => {
        setFavorites(getVideos());
    }, []);

    return (
        <MainLayout title="Favorite">
            <VideoCards
                videos={favorites}
                onClickDelete={handleClickDelete}
            />
        </MainLayout>
    );
};

export default About;
