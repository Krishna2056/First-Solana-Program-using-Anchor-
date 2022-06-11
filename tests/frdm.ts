import * as anchor from '@project-serum/anchor';
import { Program } from "@project-serum/anchor";
import { Frdm } from "../target/types/frdm";

describe("frdm", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

//FRCFKyUkRdiiZEfZdr4vGYAY9azViyRoAXMBJSyAFyKy

// Read the generated IDL.
const idl = JSON.parse(
  require("fs").readFileSync("./target/idl/frdm.json", "utf8")
);

// Address of the deployed program.
const programId = new anchor.web3.PublicKey("FRCFKyUkRdiiZEfZdr4vGYAY9azViyRoAXMBJSyAFyKy");

const rpcHost = "https://api.devnet.solana.com"
const connection = new anchor.web3.Connection(rpcHost);

//const provider = new anchor.Provider();
// Generate the program client from IDL.
const program = new anchor.Program<Frdm>(idl, programId);


  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
