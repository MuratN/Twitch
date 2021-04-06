import styles from './video-card.module.scss';

export const VideoCard = ({
    id,
    url,
    src,
    title,
    isFavorite,
    onClickAdd,
    onClickDelete
}) => {
    const handleClickAdd = () => {
        onClickAdd(id);
    };

    const handleClickDelete = () => {
        onClickDelete(id);
    };

    return (
        <div className={styles.contentItem}>
            <img src={src} />
            
            <a target="__blank" href={url}>
                <div className={styles.contentItemInfo}>
                    <figcaption className={styles.sign}>{title}</figcaption>
                </div>
            </a>
            <div className={styles.contentItemActions}>
                {isFavorite ? (
                    <button onClick={handleClickDelete} className={styles.favorite}>
                        <img src="/delete.png" alt="Кнопка «button»" />
                    </button>
                ) : (
                    <button onClick={handleClickAdd} className={styles.favorite}>
                        <img src="/favorite.png" alt="Кнопка «button»" />
                    </button>
                )}
            </div>
        </div>
    )
};
