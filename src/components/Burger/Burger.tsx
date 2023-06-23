import styles from "./style.module.scss"
import classNames from "classnames";

const Burger = ({open}: {
    open: boolean
}) => {
    return (
        <div className={classNames(
            styles.icon,
            {[styles.iconOpen]: open}
        )}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect className={styles.line1} x="1" y="9" width="22" height="1"/>
                <rect className={styles.line2} x="1" y="14" width="22" height="1"/>
            </svg>
        </div>
    );
};

export default Burger;
