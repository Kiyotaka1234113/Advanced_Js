export class Command {
  execute() { throw new Error("must implement execute()"); }
  undo() { throw new Error("must implement undo()"); }
}