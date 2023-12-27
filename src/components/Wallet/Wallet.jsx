import { useState } from 'react';
import ABI from "./ABI.json";
import Web3 from 'web3';
import './Wallet.css';

const Wallet =({saveState})=>{
      const [connected,setConnected]=useState(true);
      const isAndroid = /android/i.test(navigator.userAgent);
      const init =async()=>{
      try{
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({method:'eth_requestAccounts'});
            const contract = new web3.eth.Contract(
                  ABI,
                  "0x186646088d842479f9AdF0fba6F03Feb4a78621f"
            );
             setConnected(false);
             saveState({web3:web3,contract:contract});
            }catch(error){
                  alert("please install Meatamask");
            }
      }
 
      return<>
      <div className="header">
      {isAndroid  && <button className="connectBTN">
         <a href="https://metamask.app.link/dapp/dappnavigator.netlify.app/">Click For Mobile</a>
        </button>  } 
       <button className="connectBTN" onClick={init} disabled={!connected}> {connected?"Connect Metamask":"connected"}</button>
      </div>
      </>
}
export default Wallet;