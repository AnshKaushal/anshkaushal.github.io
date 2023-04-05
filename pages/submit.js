import styles from '../styles/Home.module.css';

const Submit = () => {
  
  return (
    <>
      <div className={styles.submit}>
        <h1>Submit your photos here!</h1>
        <input type="file"/>
      </div>
    </>
  );
};

export default Submit;
