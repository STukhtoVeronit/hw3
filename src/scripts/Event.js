// // @flow
// class EventObserve {
//   sender: object;
//
//   listeners: any[] = [];
//
//   constructor(sender: object) {
//     this.sender = sender;
//   }
//
//   get sender(): object {
//     return this.sender;
//   }
//
//   set sender(sender: object) {
//     this.sender = sender;
//   }
//
//   attach(listener: () => void) {
//     this.listeners.push(listener);
//   }
//
//   notify(args: any) {
//     this.listeners.forEach((listener) => {
//       listener(this.sender, args);
//       // document.appendChild(document.createElement('span').innerHTML(listener));
//     });
//   }
// }
