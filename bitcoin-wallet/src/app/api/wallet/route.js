import { NextResponse } from "next/server";

const { BIP32Factory } = require("bip32");
const ecc = require("tiny-secp256k1");
const bip32 = BIP32Factory(ecc);
const bip39 = require("bip39");
const bitcoin = require("bitcoinjs-lib");
const network = bitcoin.networks.bitcoin;
const path = `m/44'/1'/0'/0`;

export async function GET() {
  let mnemonic = bip39.generateMnemonic();
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  let root = bip32.fromSeed(seed, network);

  let account = root.derivePath(path);
  let node = account.derive(0).derive(0);

  let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
  }).address;

  return NextResponse.json({
    address: btcAddress,
    key: node.toWIF(),
    mnemonic: mnemonic,
  });
}
