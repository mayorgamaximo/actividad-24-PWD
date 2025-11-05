# 💠 Actividad 24 — Smart Contracts, Web3 y Conexión con Wallets (Ethereum)

Este proyecto fue desarrollado como parte de la **Actividad 24** de la materia  
**Proyecto de Implementación de Sitios Web Dinámicos (Diseño Web Dinámico)** — EEST N.º 1 “Eduardo Ader”.

## 📘 Descripción general
El proyecto implementa una **interfaz web moderna e interactiva** que permite conectar una billetera **MetaMask** a una aplicación web utilizando **JavaScript** y los principios de **Web3**.

Si el usuario no tiene MetaMask instalada, el sitio realiza una **conexión simulada** mostrando una dirección ficticia, cumpliendo con el objetivo educativo de comprender la interacción entre aplicaciones web y blockchain.

---

## 🧠 Objetivos de la actividad
- Comprender el funcionamiento de los **Smart Contracts** y las **DApps (Aplicaciones Descentralizadas)**.  
- Implementar la **conexión de una wallet Ethereum (MetaMask)** desde el navegador.  
- Simular la interacción con una blockchain en caso de no tener MetaMask.  
- Diseñar una interfaz limpia, responsive y con una buena experiencia de usuario.  

---

## ⚙️ Tecnologías utilizadas
- **HTML5** → Estructura del sitio.  
- **CSS3 (Inter, variables, flexbox y efectos hover)** → Estilos y diseño visual.  
- **JavaScript (ES6)** → Lógica de conexión con MetaMask o simulación automática.  
- **Web3 / MetaMask API** → Comunicación con la billetera del usuario.  

---

## 🧩 Funcionalidades principales
- 🔗 Detección automática de MetaMask.  
- ✅ Conexión real a la cuenta Ethereum del usuario (si existe).  
- 🧪 Simulación automática de conexión si MetaMask no está instalada.  
- 👤 Muestra el nombre del alumno (“Maximo Mayorga”) y el estado de conexión.  
- 💻 Diseño moderno, adaptable y animado con colores suaves y tipografía profesional.  

---

## 🚀 Instrucciones de uso
1. Clonar este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/actividad24-web3.git
   cd actividad24-web3

2. Abrir el archivo index.html en el navegador.

3. Hacer clic en "Conectar Wallet":

Si tenés MetaMask instalada, pedirá permiso para conectar la cuenta.

Si no tenés MetaMask, mostrará una conexión simulada (0xA12F...34B8).


📁 actividad24-web3/
├── index.html      # Página principal
├── style.css       # Estilos generales
└── script.js       # Lógica de conexión con MetaMask o simulación

