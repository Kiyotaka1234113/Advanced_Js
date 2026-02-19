# Lab 6.1 - Task 1
## Pattern Classification

Ниже приведены классификация 10 JavaScript-сниппетов по категориям паттернов согласно Ch. 6.

---

### SNIPPET_01
- **Pattern Family:** Creational
- **Specific Pattern:** Singleton
- **Evidence:**
    if (!singleton.instance) {Singleton.instance = new Singleton(); }
- **Book reference:** Ch.6 "Creational Desing Patterns"; Ch.7 "Singleton Pattern"
- **Reasoning:**
Экземпляр класса создается только один раз и затем переиспользуется .
Это соответствует определению Creational-паттернов как механизмов контроля создания объектов.

---

### SNIPPET_02
- **Family:** Creational
- **Pattern:** Factory
- **Evidence:**
   'return new Product(type);'
- **Reference:** Ch.6 ; Ch.7 "Factory Pattern"
- **Reasoning:**
Создание объекта делегируется отдельному методу, что абстрагируется инстанцирования.

---

### SNIPPET_03
- **Family:** Creational
- **Pattern:** Builder
- **Evidence:**
   'builder.setPartA().setPartb().build();
- **Reference:** Ch.6; Ch.7 "Builder Patterns"
- **Reasoning:**
Объект создается пошагово, разделяя процесс конструирования и итоговое представление.

---

### SNIPPET_04
- **Family:** Structural
- **Pattern:** Adapter
- **Evidence:**
   'adapter.request()-> adaptee.specificRequest()'
- **Reference:** Ch.6; Ch.8 "Adapter Pattern"
- **Reasoning:**
Интерфейс одного класса приводится к другому для совместимости компонентов.

---

### SNIPPET_05
- **Family:** Structural
- **Pattern:** Decorator
- **Evidence:**
   'this.component.operation();'
- **Reference:** Ch.6; Ch.8 "Decorator Pattern"
- **Reasoning:**
Поведение объекта расширяется динамически через композицую.

---

### SNIPPET_06
- **Family:** Structural
- **Pattern:** Facade
- **Evidence:**
   'facade.simpleMethod()'
- **Reference:** Ch.6; Ch.8 "Facade Pattern"
- **Reasoning:**
Предоставляется единый упрощенный интерфейс к сложной подсистеме.

---

### SNIPPET_07
- **Family:** Behavioral
- **Pattern:** Observer
- **Evidence:**
   'obsrvers.forEach(0 => 0.update())'
- **Reference:** Ch.6; Ch.9 "Observer Pattern"
- **Reasoning:**
Реализован механизм подписки и уведомления наблюдателей об изменениях состояния.

---

### SNIPPET_08
- **Family:** Behavioral
- **Pattern:** Strategy
- **Evidence:**
   'context.setStrategy(new ConcreteStrategy())'
- **Reference:** Ch.6; Ch.9 "Strategy Pattern"
- **Reasoning:**
Алгоритм может быть заменен во время выполнения без изменения контекста.

---

### SNIPPET_09
- **Family:** Behavioral
- **Pattern:** Command
- **Evidence:**
   'command.execute()'
- **Reference:** Ch.6; Ch.9 "Command Pattern"
- **Reasoning:**
Запрос инкапсулируется как объект, что отделяет отправителя от получателя.

---

### SNIPPET_10
- **Family:** Behavioral
- **Pattern:** State
- **Evidence:**
   'this.satate.handle()'
- **Reference:** Ch.6; Ch.9 "State Pattern"
- **Reasoning:**
Поведение объекта зависит от его внутреннего состояния.