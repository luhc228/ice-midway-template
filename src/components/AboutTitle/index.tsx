import style from './index.module.less';

const AboutTitle = (props) => {
  const {
    img, textH4, textH3, alt, height, width,
  } = props;
  return (
    <div className={style.aboutTitle}>
      <div className={style.aboutBlock}>
        <img
          src={`../../../public/${img}`}
          height={height || 64}
          width={width || 64}
          alt={alt || ''}
        />
      </div>
      <div className={`textCenter ${style.mrTp26PX}`}>
        <h4>{ textH4 || ''}</h4>
        <h3>{textH3 || '' }</h3>
      </div>
    </div>
  );
};

export default AboutTitle;
