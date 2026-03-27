export class CommandManager {
  constructor() { this.history = []; this.redoStack = []; }
  execute(command) {
    command.execute();
    this.history.push(command);
    this.redoStack = [];
  }
  undo() {
    const cmd = this.history.pop();
    if (cmd) { cmd.undo(); this.redoStack.push(cmd); }
  }
  redo() {
    const cmd = this.redoStack.pop();
    if (cmd) { cmd.execute(); this.history.push(cmd); }
  }
}