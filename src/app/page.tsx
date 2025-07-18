import styles from "./page.module.css";
import TruckDashboard from "@/components/truck-dashboard";

export default function Home() {
  return (
    <div className={styles.page}>
      <TruckDashboard />
    </div>
  );
}
