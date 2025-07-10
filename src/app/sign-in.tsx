import styles from "./page.module.css";
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className={styles.hash}>
      <SignIn routing="hash" />
    </div>
  )
}