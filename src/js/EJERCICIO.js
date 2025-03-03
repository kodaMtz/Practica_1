/*const cliente = {
  nombre: "pedro p",
  id: 3,
  saldo: 0,
  retirar: (importe) => {
    if (cliente.saldo < importe) {
      throw new Error("Saldo Insuficiente");
    }
    cliente.saldo -= importe;
  },
  depositar: (importe) => {
    if (importe > 10000) {
      throw new Error("Limite de deposito excedido");
    }
    cliente.saldo += importe;
  },
};

try {
  cliente.depositar(9000);
  console.log(`Deposito exitoso, tu saldo es ${cliente.saldo}`);
  cliente.retirar(500);
  console.log(`Retiro exitoso. tu saldo es: ${cliente.saldo}`);
} catch (error) {
  console.error(error.message);
}*/

try {
  let a = 56;
  let b = 0;
  if (b === 0) {
    throw new Error("Division por 0 incorrecto revisa tus datos");
  }
  let resultado = a / b;
  console.log("el resultado es:" + " " + resultado);
} catch (error) {
  console.log(error.message);
}
