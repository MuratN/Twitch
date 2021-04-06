import { VideoCard } from '../video-card/video-card';
import styles from './video-cards.module.scss';
import { isFavorite } from '../../stores/favorite.store';

export const VideoCards = ({
    videos,
    onClickAdd,
    onClickDelete
}) => {
    return (
        <div className={styles.content}>
            {videos.map(res => {
                const src = res.thumbnail_url
                    .replace("%{width}", "400")
                    .replace("%{height}", "248");
                    
                return (
                    <VideoCard
                        key={res.id}
                        id={res.id}
                        url={res.url}
                        src={src}
                        title={res.title}
                        isFavorite={isFavorite(res.id)}
                        onClickAdd={onClickAdd}
                        onClickDelete={onClickDelete}
                    />
                );
            })}
        </div>
    )
};
