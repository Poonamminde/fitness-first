"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar/Navbar";
import Meters from "../components/Meters/Meters";
import Workout from "../components/Workout/Workout";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Meters />
      <Workout />
    </main>
  );
}
