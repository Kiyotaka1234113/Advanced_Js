# Lab 6.2 — Task 1  
## Pattern Selection and Justification

### SCENARIO_01 — Singleton
**Summary:** единый глобальный объект конфигурации.  
**Family:** Creational  
**Why:** контроль создания экземпляра.  
**Alternative:** Factory не гарантирует единственность.

---

### SCENARIO_02 — Observer
**Summary:** автоматические уведомления подписчиков.  
**Family:** Behavioral  
**Why:** управление коммуникацией объектов.  
**Alternative:** Mediator избыточен.

---

### SCENARIO_03 — Strategy
**Summary:** динамическая смена алгоритма.  
**Family:** Behavioral  
**Alternative:** State управляет состоянием, а не алгоритмом.

---

### SCENARIO_04 — Facade
**Summary:** упрощённый интерфейс к подсистеме.  
**Family:** Structural  
**Alternative:** Adapter меняет интерфейс, но не упрощает систему.

---

### SCENARIO_05 — Builder
**Summary:** пошаговая сборка сложного объекта.  
**Family:** Creational  
**Alternative:** Factory создаёт объект сразу.

---

### SCENARIO_06 — Command
**Summary:** запрос как объект (очередь, отмена, логирование).  
**Family:** Behavioral  
**Alternative:** Strategy не хранит сам запрос.
