import classes from './Header.module.scss'
export default function Header() {
  return (
      <header className={classes.header}>
        <div className={classes.container}>
            <a className={classes.link} href="/">ToDo</a>
        </div>
    </header>

  )
}
