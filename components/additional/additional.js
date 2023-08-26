import classes from './additional.module.scss';

const Additional = () => {
  return (
    <section id='features' className={classes.additional}>
      <div className="container">
        <h2 className={classes.title}>Additional app information</h2>
        <div className={classes.wrapper}>
           <div className={classes.block1}>
             <div className={classes.subBlock}>
              <div className={classes.number1}>1</div>
              <div className={classes.descr}>
                <div className={classes.subTitle}>Licensed & Regulated</div>
                <div className={classes.subDescr}>At vero eos et accusamus et iusto odio </div>
              </div>
             </div>

             <div className={classes.subBlock}>
              <div className={classes.number2}>2</div>
              <div className={classes.descr}>
                <div className={classes.subTitle}>Multi-Asset CFD Provider</div>
                <div className={classes.subDescr}>Stocks <span className={classes.span}>|</span> FX <span className={classes.span}>|</span> Commodities<span className={classes.span}>| </span>Indices <span className={classes.span}>|</span> Crypto </div>
              </div>
             </div>

             <div className={classes.subBlock}>
              <div className={classes.number3}>3</div>
              <div className={classes.descr}>
                <div className={classes.subTitle}>Ultra-Low-Cost Trading</div>
                <div className={classes.subDescr}>Spreads from 0.0 pips</div>
              </div>
             </div>

              <div className={classes.subBlock}>
              <div className={classes.number4}>4</div>
              <div className={classes.descr}>
                <div className={classes.subTitle}>Auto-Trading Platform</div>
                <div className={classes.subDescr}>Proven <span className={classes.span}>|</span> Safe <span className={classes.span}>|</span> Simple</div>
              </div>
             </div>
           </div>

           <div className={classes.block2}>
           <picture>
              <source
                width={1062}
                height={600}
                media="(min-width: 1440px)"
                srcSet="/images/figure1440.webp"
              />
        
              <source
                width={768}
                height={701}
                media="(min-width: 768px)"
                srcSet="/images/figure768.webp"
              />
            
              <source
                width={320}
                height={204}
                media="(min-width: 320px)"
                srcSet="/images/figure320.webp"
              />
              <img src={'/images/figure768.webp'} alt='You will see telefon' width={720} height={425}/>
            </picture>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Additional;