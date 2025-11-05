// script.js - Actividad 24: Smart Contracts y Wallets
document.addEventListener("DOMContentLoaded", () => {
    const connectButton = document.getElementById("connectButton");
    const walletStatus = document.getElementById("walletStatus");
  
    
    const SIMULATED_ADDRESS = "0xA12F00000000000000000000000034B8";
  
    // función para acortar direcciones
    const shortenAddress = (addr) => `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  
    async function connectWallet() {
      walletStatus.textContent = "🔄 Intentando conectar...";
      walletStatus.style.color = "#6b7280";
  
      try {
        if (window.ethereum) {
          // MetaMask disponible
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          if (accounts && accounts.length > 0) {
            const account = accounts[0];
            walletStatus.textContent = `✅ Wallet conectada: ${shortenAddress(account)}`;
            walletStatus.style.color = "#10b981";
          } else {
            walletStatus.textContent = "⚠️ No se encontraron cuentas.";
            walletStatus.style.color = "#ef4444";
          }
        } else {
          // No hay MetaMask → simulación
          walletStatus.textContent = `Conexión simulada: ${shortenAddress(SIMULATED_ADDRESS)}`;
          walletStatus.style.color = "#10b981";
        }
      } catch (error) {
        console.error("Error al conectar la wallet:", error);
        walletStatus.textContent = "❌ Error al conectar la wallet.";
        walletStatus.style.color = "#ef4444";
      }
    }
  
    connectButton.addEventListener("click", connectWallet);
  });
  