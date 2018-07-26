class EventObserve {
  private _sender: object;
  private _listeners: object[] = [];

  constructor(sender: object) {
    this._sender = sender;
  }
  get sender(): object {
    return this._sender;
  }
  set sender(sender:object) {
    this._sender = sender;
  }
  get listeners(): object[] {
    return this._listeners;
  }
  set listeners(listeners:object[]) {
    this._listeners = listeners;
  }
  //
  attach () {
    const a = 1;
  }
}
