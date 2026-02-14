// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title DealToken
 * @dev Motor de gobernanza y utilidad del ecosistema DEAL.
 */
contract DealToken is ERC20 {
    constructor() ERC20("DEAL Token", "DEAL") {
        _mint(msg.sender, 1000000000 * 10**decimals());
    }
}
