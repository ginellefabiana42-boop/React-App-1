import { useState, useCallback } from "react"

export default function Sidebar({ initialMenuItems }) {
  // TODO: 2. Maintain Menu State
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  
  let [filter, setFilter] = useState("")

  // TODO: 3. Implement AddMenuItem Callback
  let addMenuItem = useCallback(() => {
    const newItem = document.getElementById("new-menu-item").value;
    if (newItem) {
      setMenuItems([...menuItems, newItem]);
      document.getElementById("new-menu-item").value = "";
    }
  }, [menuItems])

  // TODO: 4. Filter Menu Items
  const filteredMenuItems = menuItems.filter((item) => {
    const regex = new RegExp(filter, "i");
    return item.match(regex);
  });

  return (
    <div>
      {/* for adding new items and stuff */}
      <input
        type="text"
        id="new-menu-item"
        placeholder="Add new item"
      />
      <button onClick={addMenuItem}>Add</button>
      
      <br />

      {/* for some filtering items and things */}
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      />

      {/* TODO: 1. Render Menu Items */}
      {/* looks through the filteredMenuItems to display the list */}
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
