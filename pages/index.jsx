import { useState } from "react";
import { MainLayout } from "../components/main-layout/main-layout";
import { searchVideos } from '../api/twitch.api';
import styles from "../styles/index.module.scss";
import { addVideo, deleteVideo } from '../stores/favorite.store';
import { VideoCards } from '../components/video-cards/video-cards';

const Index = () => {
    const [search, setSearch] = useState("fandorine96");
    const [searchResult, setSearchResult] = useState([]);

    const handleClickSearch = async () => {
        const result = await searchVideos(search);

        setSearchResult(result.data);
    };

    const handleClickAdd = (id) => {
        const video = searchResult.find(item => item.id === id);
        addVideo(video);
        setSearchResult([...searchResult]);
    };

    const handleClickDelete = (id) => {
        deleteVideo(id);
        setSearchResult([...searchResult]);
    };

    return (
        <MainLayout title="Home">
            <section>
                <div className={styles.header}>
                    <p className={styles.label}>Введите название канала</p>
                    <input
                        type="text"
                        className={styles.input}
                        value={search}
                        onChange={(evt) => setSearch(evt.target.value)}
                    />
                    <button
                        type="button"
                        className={styles.button}
                        onClick={handleClickSearch}
                    >
                        Найти
                    </button>
                </div>
                <VideoCards
                    videos={searchResult}
                    onClickAdd={handleClickAdd}
                    onClickDelete={handleClickDelete}
                />
            </section>
        </MainLayout>
    );
};

export default Index;
