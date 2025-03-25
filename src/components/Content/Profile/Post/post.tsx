import React, {useState} from 'react';
import s from './Post.module.css';

// Определяем интерфейс для props
interface PostProps {
    likesCount: number;
    isLiked:boolean;
}

let isLiked: boolean = true;
const Post: React.FC<PostProps> = (props) => {
    // Инициализация состояния для лайков из props
    const [likesCount, setLikesCount] = useState<number>(props.likesCount);

    const handleLike = () => {
        if (isLiked)
        {setLikesCount(likesCount - 1);
        isLiked=false}
         else {
            setLikesCount(likesCount + 1);
            isLiked=true

    };

    }

    return (
        <div className={s.item}>
            <div>
                <img
                    src='https://cs14.pikabu.ru/post_img/2022/11/28/5/1669616969182636332.webp'
                    alt="Фото поста"
                />
            </div>
            {props.message}
            <div>
                <span onClick={handleLike} style={{cursor: 'pointer', color: 'blue'}}>
                    like
                </span> {likesCount}
            </div>
        </div>
    );
};

export default Post;
