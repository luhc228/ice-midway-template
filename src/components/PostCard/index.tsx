import style from './index.module.less';

const PostCard = (props) => {
  const { cover, title, excerpt, date } = props;

  return (
    <div className={style.postCard}>
      <div
        className={style.postCardImg}
        style={{
          backgroundImage: `url(${cover})`,
        }}
      />
      <div className={style.mrTp20}>
        <p>
          <span className={style.dateHolder}>{date}</span>
        </p>
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
    </div>
  );
};

export default PostCard;
