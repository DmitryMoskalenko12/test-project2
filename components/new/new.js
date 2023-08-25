import classes from './new.module.scss';

const New = () => {
  return (
    <section className={classes.new}>
      <div className="container">
        <h2 className={classes.title}>
          What is new in our product
        </h2>
        <div className={classes.imgWrap}>
            <picture>
              <source
                width={1062}
                height={600}
                media="(min-width: 1440px)"
                srcSet="/images/picture1440.webp"
              />
        
              <source
                width={720}
                height={425}
                media="(min-width: 768px)"
                srcSet="/images/picture768.webp"
              />
            
              <source
                width={320}
                height={204}
                media="(min-width: 320px)"
                srcSet="/images/picture320.webp"
              />
              <img src={'/images/picture768.webp'} alt='You will see player' width={720} height={425}/>
            </picture>
          </div>
      </div>
    </section>
  )
}

export default New;