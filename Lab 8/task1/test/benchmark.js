import treeFactory from "../tree/TreeFactory.js";
import { FlyweightTree } from "../tree/FlyweightTree.js";

export function runBenchmark() {
  console.log("--- Запуск бенчмарка памяти ---");
  const COUNT = 100000;
  
  
  const startNoFlyweight = performance.now();
  const heavyForest = [];
  for(let i = 0; i < COUNT; i++) {
    heavyForest.push(new FlyweightTree("pine", "Pine", "green", "brown", 80, 30));
  }
  const timeNoFlyweight = performance.now() - startNoFlyweight;
  
  
  const startFlyweight = performance.now();
  const lightForest = [];
  for(let i = 0; i < COUNT; i++) {
    lightForest.push({
      flyweight: treeFactory.getTree("pine", "Pine", "green", "brown", 80, 30),
      x: 10, y: 10
    });
  }
  const timeFlyweight = performance.now() - startFlyweight;

  console.log(`Создание ${COUNT} деревьев БЕЗ паттерна: ${timeNoFlyweight.toFixed(2)} ms`);
  console.log(`Создание ${COUNT} деревьев С паттерном: ${timeFlyweight.toFixed(2)} ms`);
  console.log(`Память сохранена на: ${treeFactory.getStats().memorySaved}`);
}