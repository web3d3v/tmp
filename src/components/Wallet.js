import React from 'react';
import './Wallet.css';
import Vitalik from "./Vitalik";
import WalletSectionMeme from "./WalletSectionMeme";

const Wallet = (props) => {
    const { progress } = props;
    return (
        <div id='wallet' className='margin-auto margin-h-2 margin-v-1 wallet'>
            <div className='wallet-tvs'>
                <object type="image/svg+xml" data="images/wallet/tv_dexes.svg" className='svg'>tv_dexes</object>
                <object type="image/svg+xml" data="images/wallet/tv_native_integrations.svg" className='svg'>tv_native_integrations</object>
                <object type="image/svg+xml" data="images/wallet/tv_l1_l2.svg" className='svg'>tv_l1_l2</object>
                <object type="image/svg+xml" data="images/wallet/tv_selfcustodial.svg" className='svg'>tv_selfcustodial</object>
            </div>
            <div className='wallet-text-container'>
                <div className='wallet-left-text'>
                    <p>
                        Best in class mobile and browser extension wallets. With
                        compromises no on crypto ideals. Most vendors target new
                        inexperienced users. Web3 wallet targets crypto natives.
                    </p>
                    <p>
                        Offering advanced features, not supported by competitors. All
                        the while providing sleek, polished, intuitive UI/UX
                        approachable to beginners. Ultimate aim is for web3 wallet to
                        become a wallet crypto natives recommend to family and friends.
                    </p>
                    <p>
                        Most of the front ends for smart contracts are hosted on central
                        ised servers. Web3 wallet aims to support native in app smart
                        contract interaction for large number of popular web3 dapps.
                    </p>
                </div>
                <WalletSectionMeme/>
                <div className='wallet-right-text'>
                    <p>
                        Thus increasing decentralisation and censorship resistance. As
                        well as allowing users to avoid analytics and tracking on front
                        end. Hence increasing user privacy.
                    </p>
                    <p>
                        It very inconvenient, if not impossible, to use most of DeFi and
                        web3 dapps on mobile. Due to front ends not being responsive and
                        mobile browsers not supporting wallet browser extension.
                    </p>
                    <p>
                        Web3 wallet aims to address former by supporting native in app smart
                        contract interactions. Latter by providing mobile extension
                        that inject web3 wallet provider to front ends and approves
                        signing of transactions via mobile native browser extension.
                        Bringing user experience on par with desktop browser extension wallets.
                    </p>
                </div>
            </div>
            <div className='wallet-tvs'>
                <object type="image/svg+xml" data="images/wallet/tv_nfts.svg" className='svg'>tv_nfts</object>
                <object type="image/svg+xml" data="images/wallet/tv_derivatives.svg" className='svg'>tv_derivatives</object>
                <object type="image/svg+xml" data="images/wallet/tv_staking.svg" className='svg'>tv_dexes2</object>
                <object type="image/svg+xml" data="images/wallet/tv_bridges.svg" className='svg'>tv_bridges</object>
            </div>
        </div>
    )
}

export default Wallet;
