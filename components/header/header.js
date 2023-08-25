import classes from './header.module.scss';
import { useState } from 'react';
import cn from 'classnames';

const Header = () => {
  const [trigger, setTrigger] = useState(false);

  const arrLink = [
    {id: 1, content: "Main", href: '#main', clazz: classes.link},
    {id: 2, content: "About Us", href: '#about', clazz: classes.link},
    {id: 3, content: "Features", href: '#features', clazz: classes.link},
    {id: 4, content: "Screenshots", href: '#screenShots', clazz: classes.link},
    {id: 5, content: "Process", href: '#process', clazz: classes.link},
    {id: 6, content: "Contacts", href: '#footer', clazz: classes.link},
  ];

  const onTrigger = (e) => {
    if (e.target.tagName === 'NAV' || e.target.tagName === 'DIV') {
      setTrigger(trig => !trig)
    }
  }

  return (
    <header className={classes.header}>
      <div className="container">
       <div className={classes.wrapper}>
        <div className={classes.logo}>
          <a href="#">
          LOGO HERE!
          </a>
        </div>

        <nav onClick={onTrigger} className={cn(classes.nav_header, {[classes.active_nav]: trigger})}>
          <ul>
            {
              arrLink.map(({id, href, content, clazz}) => {
                return <li key={id}><a className={cn(clazz)} href={href}>{content}</a></li>
              })
            }
          </ul>
        </nav>

        <div onClick={onTrigger} className={cn(classes.hamburger, {[classes.hamburger_active]: trigger})}>
          <div></div>
          <div></div>
          <div></div>
        </div>
       </div>
      </div>
  </header>
  )
}

export default Header;