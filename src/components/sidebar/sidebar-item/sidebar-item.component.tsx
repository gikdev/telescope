import { cls } from "@/helpers"
import type { Icon } from "@phosphor-icons/react"
import { SealQuestion } from "@phosphor-icons/react/dist/ssr"
import styles from "./sidebar-item.module.scss"

interface Props {
  Iconn?: Icon
  text?: string
  isActive?: boolean
}

function SidebarItem({ Iconn = SealQuestion, text = "نامعلوم", isActive = false }: Props) {
  return (
    <li {...cls(styles.sidebarItem, isActive ? styles.active : "")}>
      <Iconn size={7 * 4} />
      <span>{text}</span>
    </li>
  )
}

export default SidebarItem
