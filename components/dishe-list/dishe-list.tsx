import Styles from "./dishe-list.module.css";
import { Dishe } from "@/components";

export function DisheList() {
  return (
    <div className={Styles.list}>
      <Dishe />
      <Dishe />
      <Dishe />
    </div>
  );
}