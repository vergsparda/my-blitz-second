import { LoginForm } from "../components/LoginForm"
import styles from "../../styles/Login.module.css"

export default function LoginPage() {
  return (
    <div className={styles.wrap}>
        <LoginForm />
    </div>
  )
}
