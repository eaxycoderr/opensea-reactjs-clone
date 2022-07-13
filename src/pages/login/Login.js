import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css"

const Login = () => {
    const [showMoreWa, setShowMoreWa] = useState(false);

  return (
    <div className='login'>
        <div className="inLogin">
            <div className="connectWalletListsPage">
                <div className="cWLDheader">
                    <span>Connect your wallet</span>
                </div>
                <div className="cWLDb">
                    <div className="cWLDhText">
                        <p>
                        Connect with one of our available <Link to="">wallet</Link>{" "}
                        providers or create a new one.
                        </p>
                    </div>
                    <div className="cWLDhWLists">
                        <button className="fCWb">
                            <div><img src="https://i.im.ge/2022/07/09/updEYG.png" alt="" /><span>MetaMask</span></div>
                            <div className="cWLDhWNpo">Popular</div>
                        </button>
                        <button>
                            <div><img src="https://i.im.ge/2022/07/09/upq77x.png" alt="" /><span>Coinbase Wallet</span></div>
                        </button>
                        <button>
                            <div><img src="https://i.im.ge/2022/07/09/upqDCa.png" alt="" /><span>WalletConnect</span></div>
                        </button>
                        <button>
                            <div><img src="https://i.im.ge/2022/07/09/upqIpJ.png" alt="" /><span>Phantom</span></div>
                            <div className="cWLDhWNpo cWLDhWNnpo">Solana</div>
                        </button>
                        <button>
                            <div><img src="https://i.im.ge/2022/07/09/upqU2y.png" alt="" /><span>Glow</span></div>
                            <div className="cWLDhWNpo cWLDhWNnpo">Solana</div>
                        </button>
                        {showMoreWa &&
                        <>
                            <button>
                            <div><img src="https://i.im.ge/2022/07/09/up76DL.png" alt="" /><span>Fortmatic</span></div>
                            </button>
                            <button>
                            <div><img src="https://i.im.ge/2022/07/09/up7A6J.png" alt="" /><span>Kaikas</span></div>
                            </button>
                            <button>
                            <div><img src="https://i.im.ge/2022/07/09/up7NCG.png" alt="" /><span>Bitski</span></div>
                            </button>
                            <button>
                            <div><img src="https://i.im.ge/2022/07/09/up7ySa.png" alt="" /><span>Venly</span></div>
                            </button>
                            <button>
                            <div><img src="https://i.im.ge/2022/07/09/up7Pvx.png" alt="" /><span>Dapper</span></div>
                            </button>
                            <button>
                            <div><img src="https://i.im.ge/2022/07/09/up7CVy.png" alt="" /><span>Authereum</span></div>
                            </button>
                            <button>
                            <div><img src="https://i.im.ge/2022/07/09/up7xrS.png" alt="" /><span>Torus</span></div>
                            </button>
                            <button>
                            <div><img src="https://i.im.ge/2022/07/09/up7Yg6.png" alt="" /><span>Portis</span></div>
                            </button>
                            <button className="disabledButton">
                            <div><img src="https://i.im.ge/2022/07/09/up7cMF.png" alt="" /><span>OperaTouch</span></div>
                            <span className="cWLDhWSpan">mobile only</span>
                            </button>
                            <button className="disabledButton">
                            <div><img src="https://i.im.ge/2022/07/09/up7gDK.png" alt="" /><span>Trust</span></div>
                            <span className="cWLDhWSpan">mobile only</span>
                            </button>
                        </>
                        }
                        {showMoreWa ? (
                            <button className="showMoreWa" onClick={() => setShowMoreWa(!showMoreWa)}>Show fewer options</button>
                            ) : (
                            <button className="showMoreWa" onClick={() => setShowMoreWa(!showMoreWa)}>Show more options</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login