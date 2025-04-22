const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"register":{"uri":"register","methods":["GET","HEAD"]},"register.attempt":{"uri":"register","methods":["POST"]},"login":{"uri":"login","methods":["GET","HEAD"]},"login.attempt":{"uri":"login","methods":["POST"]},"logout":{"uri":"logout","methods":["POST"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"admin.dashboard":{"uri":"admin\/dashboard","methods":["GET","HEAD"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
