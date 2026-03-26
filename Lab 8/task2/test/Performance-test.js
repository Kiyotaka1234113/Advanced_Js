export function testEventDelegation(containerId) {
  const container = document.getElementById(containerId);
  const startTime = performance.now();
  
 container.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
      const item = e.target.closest(".todo-item");
      item.classList.toggle("completed", e.target.checked);
    }
  });
  
  return performance.now() - startTime;
}

export function testIndividualListeners(containerId, itemCount) {
  const container = document.getElementById(containerId);
  const startTime = performance.now();
  
  for (let i = 1; i <= itemCount; i++) {
    const item = container.querySelector(`[data-id="todo-${i}"]`);
    if (item) {
      const checkbox = item.querySelector('input[type="checkbox"]');
      if(checkbox) {
          checkbox.addEventListener("change", () => {
            item.classList.toggle("completed", checkbox.checked);
          });
      }
    }
  }
  return performance.now() - startTime;
}