import React, { useState } from "react"
import { ethers } from "ethers"

import { Button } from "./ui/button"

interface Wallet {
  address: string
  privateKey: string
  seedPhrase: string
}

export const CreateWalletButton: React.FC = () => {
  const [wallet, setWallet] = useState<Wallet | null>(null)

  const handleCreateWallet = () => {
    const newWallet = ethers.Wallet.createRandom()
    setWallet({
      address: newWallet.address,
      privateKey: newWallet.privateKey,
      seedPhrase: newWallet?.mnemonic?.phrase ?? "",
    })
  }

  return (
    <div className="text-center">
      <Button
        onClick={handleCreateWallet}
        className="bg-violet-500 hover:bg-violet-700 text-white font-bold rounded"
      >
        Create Wallet 🪪
      </Button>

      {wallet && (
        <div className="mt-4 text-left bg-slate-300 rounded-lg">
          <div className="px-0.5 py-2">
            <p>
              🏠 Address:{" "}
              <span className="underline font-medium">{wallet.address}</span>
            </p>
            <p>
              🔑 Private Key:{" "}
              <span className="underline font-medium">{wallet.privateKey}</span>
            </p>
            <p>
              🪴 Seed phrase:{" "}
              <span className="underline font-medium">{wallet.seedPhrase}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
