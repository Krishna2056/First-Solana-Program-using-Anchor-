use anchor_lang::prelude::*;

declare_id!("FRCFKyUkRdiiZEfZdr4vGYAY9azViyRoAXMBJSyAFyKy");

#[program]
pub mod frdm {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("This is Krishna's first solana program deployed on devnet!!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
