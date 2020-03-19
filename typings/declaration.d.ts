/** Declare scss module for supporting
 * imports like so
 * import styles from './styles.scss'
 * **/
declare module '*.scss' {
  const styles: { [className: string]: string };
  export default styles;
}