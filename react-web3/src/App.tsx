import { useEffect } from 'react';
import './App.css';
import Web3 from 'web3';
declare const window: any;
function App() {
  useEffect(() => {
    window.ethereum.enable();
  }, []);
  const sendEther = async () => {
    const web3 = new Web3(window.web3.currentProvider);
    const [account] = await web3.eth.getAccounts();
    const tx = await web3.eth.sendTransaction({
      from: account,
      to: '0x31c86dF3D1F1ef73FAcBf519f8Fa7E45ac3dBFcd',
      value: '10000000000',
    });
    console.log(tx);
  };
  return (
    <div className="App">
      <button onClick={sendEther}>发起交易</button>
    </div>
  );
}

export default App;
