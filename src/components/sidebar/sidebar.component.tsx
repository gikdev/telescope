import type { Icon } from "@phosphor-icons/react"
import { Gear, House, UserCheck, UserCircle } from "@phosphor-icons/react/dist/ssr"
import SidebarItem from "./sidebar-item/sidebar-item.component"
import styles from "./sidebar.module.scss"

interface ISidebarItemData {
  Iconn: Icon
  text: string
  isActive?: boolean
}

const sidebarItems: ISidebarItemData[] = [
  { Iconn: House, text: "خانه", isActive: true },
  { Iconn: UserCircle, text: "پروفایل" },
  { Iconn: UserCheck, text: "حضور و غیاب" },
  { Iconn: Gear, text: "تنظیمات" },
]

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {sidebarItems.map((item, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <SidebarItem {...item} key={i} />
      ))}
    </aside>
  )
}

export default Sidebar
