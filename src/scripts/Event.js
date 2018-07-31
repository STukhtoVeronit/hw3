// @flow
class EventObserve {
  _sender: object;
  _listeners: any[] = [];

  constructor(sender: object) {
    this._sender = sender;
  }
  get sender(): object {
    return this._sender;
  }
  set sender(sender:object) {
    this._sender = sender;
  }
  attach (listener:() => void) {
    this._listeners.push();
  }
  notify (args:any) {
    this._listeners.forEach((listener) => {
      listener(this.sender, args);
      alert(listener);
    });
  }
}
