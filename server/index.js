const modbus = require("jsmodbus");
const net = require("net");
const netServer = new net.Server();
const server = new modbus.server.TCP(netServer);

let PORT = process.env.PORT | 502;

netServer.listen(PORT);
console.log(`O Servidor Modbus está rodando na porta ${PORT}.`);
